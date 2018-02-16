const AuthenticationController =  require('./controllers/AuthenticationController')
const AuthenticationControllerValidator =  require('./validators/AuthenticationController')
const RestritoController =  require('./controllers/RestritoController')

module.exports = function (app) {
	app.post('/register', 
	AuthenticationControllerValidator.register,
	AuthenticationController.register);

	app.post('/login',
	AuthenticationController.login)

	app.get('/apiget',
	AuthenticationController.login)

	app.post('/restrito',
	RestritoController.post)

	app.get('/restritos',
	RestritoController.index)
}
