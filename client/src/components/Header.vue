<template>
	<v-toolbar fixed class="cyan">
		<v-toolbar-title class="mr-4">Biblioteca Digital de Teses de Dissertações</v-toolbar-title>

		<v-spacer></v-spacer>
		<v-toolbar-items>
			<router-link to="register">
				<v-btn flat dark>Registrar</v-btn>
			</router-link>
				<v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="redirecionar('login')">Login</v-btn>
			<v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">Sair</v-btn>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script>
export default {
	methods: {
		redirecionar (rota) {
			this.$router.push(rota)
		},
		logout () {
			this.$store.dispatch('setToken', null)
			this.$store.dispatch('setUser', null)
			this.redirecionar('/')
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
