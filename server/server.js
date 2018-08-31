const http = require('http');
const app = require('./config/express');
const ENVIRONMENT = require('./config/environment');

http.createServer(app)
.listen(3000, () => {
	console.log(`Servidor iniciado em ${ENVIRONMENT.API_BASE_URL}`);
});
