<template>
	<v-layout column>
    <v-flex xs6 offset-xs3>
			<panel title="Login">
				<form name="tab-tracker-form" autocomplete="off">
					<v-text-field label="Email" v-model="email" />
					<br>
					<v-text-field label="Password" type="password" v-model="password" autocomplete="new-password"
					class="input-group--focused" />
				</form>
				<br>
				<div class="danger-alert" v-html="error" />
				<br>
				<v-btn  @click="login">
					Login
				</v-btn>
			</panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
	name: 'Login',
	data () {
		return {
			email: '',
			password: '',
			error: null
		}
	},
	methods: {
		async login () {
			console.log('botão foi clicado', this.email, this.password)
			try {
				const response = await AuthenticationService.login({
					email: this.email,
					password: this.password
				})
				alert(response)
				this.$store.dispatch('setToken', response.data.token)
				this.$store.dispatch('setUser', response.data.user)
				this.$router.push('/restrito')
			} catch (error) {
				this.error = error.response.data.error
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
	color:red;
}
</style>
