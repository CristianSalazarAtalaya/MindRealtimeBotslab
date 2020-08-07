module.exports = app => {
    const adviser = require("../controllers/adviser.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all Adviser
    router.get("/", adviser.findAll);
     // Create a new Tutorial
    router.post("/", adviser.create);

    app.use("/api/adviser", router);
  };
  
