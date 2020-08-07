module.exports = app => {
    const customer_facebook = require("../controllers/customer_facebook.controller.js");
  
    var router = require("express").Router();
  
    // Create a new customer of facebook
    router.post("/", customer_facebook.create);
  
    // Retrieve all customer of facebook
    router.get("/", customer_facebook.findAll);
  
    
  
    app.use("/api/customer_facebook", router);
  };
  