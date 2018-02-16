const {Restrito} = require('../models')

module.exports = {
	async index (req, res) {
		try {
			const restritos = await Restrito.findAll({
				limit: 10
			})
			res.send(restritos)
		} catch (err) {
			console.log(err)
			res.status(400).send({
				error: 'This "restrito" nao existe.'
			})
		}
	},

	async post (req, res) {
		try {
			const restrito = await Restrito.create(req.body)
			res.send(restrito)
		} catch (err) {
			console.log(err)
			res.status(400).send({
				error: 'This "restrito" nao existe.'
			})
		}
	}
}
