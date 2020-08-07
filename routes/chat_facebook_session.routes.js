module.exports = app => {
    const chat_facebook_session = require("../controllers/chat_facebook_session.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all chat_facebook_session
    router.get("/", chat_facebook_session.findAll);
     // Create a new chat_facebook_session
    router.post("/", chat_facebook_session.create);

    app.use("/api/chat_facebook_session", router);
  };
  
