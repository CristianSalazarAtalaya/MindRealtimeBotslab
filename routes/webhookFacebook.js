const express =require('express')

//utilitarios
const { chatsMock } = require('../utils/mocks/chats');

//PAGE_ACCESS_TOKEN = 'EAAgFgSzOWVIBAC2CXKZBxKTXV0mbwgOFiHEIPLIvd61iaMvvqKyz0TQicWqkGsv9tZBv4A5t5hHC6TjqH67WQ66JdCmVft57KZB309VPcVPu9wSsxBYfHGlFsTFFyrqsCbXmCxQq0pFxhZCd1p6USUZAdLTI50nWvEK1Ml3ZBhHLweXiKn4cEw';
//VERIFY_TOKEN = "PRUEBA_80K2";

//facebook mesneger
const facebook = require('fb-messenger-bot-api');
const messagingClient = new facebook.FacebookMessagingAPIClient(process.env.PAGE_ACCESS_TOKEN);
//const messagingClient = new facebook.FacebookMessagingAPIClient(PAGE_ACCESS_TOKEN);
const messageParser = facebook.FacebookMessageParser;

function webbookFacebookApi(app){
    
    const router = express.Router();
    app.use("/api/webhook/facebook", router);

    // const validateWebhook = function validateWebhook(token) {
    //     return (req, res) => facebook.ValidateWebhook.validateServer(req, res, token);
    //   }
    // const validator = validateWebhook(VERIFY_TOKEN);

    // router.get('/', validator);

    router.get('/', (req, res) => facebook.ValidateWebhook.validateServer(req,res) );
    
    router.post('/', async function(req, response){

        const incomingMessages = messageParser.parsePayload(req.body);  

        senderId  = incomingMessages[0]["sender"]["id"];
        console.log(senderId);

        await messagingClient.markSeen(senderId);
        await messagingClient.toggleTyping(senderId,true);

        //promise based reaction on message send confirmation
        const result = await messagingClient.sendTextMessage(senderId, 'Hello');
        console.log(`Result sent with: ${result}`);
            
        //} 
        //callback based reaction on message confirmation
        //messagingClient.sendTextMessage(senderId, 'Hello',(result) => console.log(`Result sent with: ${result}`));

        //silent message sending
        //messagingClient.sendTextMessage(senderId,'Hello');
    });

}




module.exports = webbookFacebookApi;