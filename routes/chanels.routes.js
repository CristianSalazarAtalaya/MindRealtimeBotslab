module.exports = app => {
    const chanels = require("../controllers/chanels.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all Chanels
    router.get("/", chanels.findAllPublished);
     // Create a new Tutorial
    router.post("/", chanels.create);

    app.use("/api/chanels", router);
  };
  
