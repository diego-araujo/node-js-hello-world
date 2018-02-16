<template>
	<v-layout column>
		<panel title="Area restrira">
			<div slot="conteudo">
				<div v-for="test in tests" :key="test.title">
				 {{test.id}}	- hello {{test.text}}
				</div>
			</div>
		</panel>
	</v-layout>
</template>

<script>
import RestritoService from '@/services/RestritoService'
export default {
	data () {
		return {
			tests: null
		}
	},
	async mounted () {
		// pegar dados no bd
		this.tests = await RestritoService.index()
	}
}
</script>

<style>

</style>
