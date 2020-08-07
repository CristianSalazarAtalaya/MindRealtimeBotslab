const db = require("../models");
const Chanels = db.chanels;
const Op = db.Sequelize.Op;

// Buscar todos los Canales
exports.findAllPublished = (req, res) => {
    Chanels.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

  // Create and Save a new Chanel
exports.create = (req, res) => {
    // Validate request
    if (!req.body.chanel_name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a chanel
    const chanels = {
      chanel_name: req.body.chanel_name,
      chanel_description: req.body.chanel_description,
      chanel_link: req.body.chanel_link
    };
  
    // Save Tutorial in the database
    Chanels.create(chanels)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };
  