module.exports = app => {
  const people = require("../controllers/people.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", people.create);

  // Retrieve all Tutorials
  router.get("/", people.findAll);

  

  app.use("/api/people", router);
};
