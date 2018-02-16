import Api from '@/services/Api'

export default {
	async index () {
		return (await Api().get('restritos')).data
	}
}
