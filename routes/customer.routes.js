module.exports = app => {
    const customer = require("../controllers/customer.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", customer.create);
  
    // Retrieve all Tutorials
    router.get("/", customer.findAll);
  
    app.use("/api/customer", router);
  };
  