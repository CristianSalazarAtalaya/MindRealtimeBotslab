// const express = require('express')
// const app = express()
const express = require("express"),
  bodyParser = require("body-parser"),
  app = express().use(bodyParser.json());

//configuracion
const { config } = require('./config/index.js')

//Variables de entorno
process.env.FB_VERIFICATION_TOKEN = 'BOTSLAB_TOKEN_VERIFICATION' ;
process.env.PAGE_ACCESS_TOKEN = 'EAAgFgSzOWVIBAC2CXKZBxKTXV0mbwgOFiHEIPLIvd61iaMvvqKyz0TQicWqkGsv9tZBv4A5t5hHC6TjqH67WQ66JdCmVft57KZB309VPcVPu9wSsxBYfHGlFsTFFyrqsCbXmCxQq0pFxhZCd1p6USUZAdLTI50nWvEK1Ml3ZBhHLweXiKn4cEw';

//rutas
const webbookFacebookApi = require('./routes/webhookFacebook.js')
webbookFacebookApi(app);

app.listen(3000, function(){
    console.log(`Listenig http://localhost:${config.port}`);
})