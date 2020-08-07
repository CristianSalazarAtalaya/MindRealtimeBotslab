module.exports = app => {
    const chat_facebook_detail = require("../controllers/chat_facebook_detail.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all chat_facebook_detail
    router.get("/", chat_facebook_detail.findAll);
     // Create a new chat_facebook_detail
    router.post("/", chat_facebook_detail.create);

    app.use("/api/chat_facebook_detail", router);
  };
  
