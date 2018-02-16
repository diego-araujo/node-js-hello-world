<template>
	<v-layout column>
    <v-flex xs6 offset-xs3>
      <form name="tab-tracker-form" autocomplete="off">
				<v-text-field label="Email" v-model="email" />
				<br>
				<v-text-field label="Password" type="password" v-model="password" autocomplete="new-password"
				class="input-group--focused" />
      </form>
			<br>
			<div class="danger-alert" v-html="error" />
			<br>
			<v-btn  @click="register">
				Register
			</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
	name: 'Register',
	data () {
		return {
			email: '',
			password: '',
			error: null
		}
	},
	methods: {
		async register () {
			try {
				const response = await AuthenticationService.register({
					email: this.email,
					password: this.password
				})
				this.$store.dispatch('setToken', response.data.token)
				this.$store.dispatch('setUser', response.data.user)
			} catch (error) {
				this.error = error.response.data.error
			}
		}
	},
	watch: {
		email (value) {
			console.log('email mudou:', value)
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
