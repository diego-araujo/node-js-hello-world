module.exports = {
	port: process.env.port || 8081,
	db: {
		database: process.env.DB_NAME || 'test',
		user: process.env.DB_USER || 'root',
		password: process.env.DB_PASS || 'diegotk',
		options: {
			dialect: process.env.DIALECT || 'mysql',
			host: process.env.HOST || 'localhost'
		}
	},
	authentication: {
		jwt_secret: process.env.JWT_SECRET || 'secret',
		user_session_expires: 604800
	}
}
