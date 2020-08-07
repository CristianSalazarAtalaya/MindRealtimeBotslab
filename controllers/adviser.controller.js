const db = require("../models");
const Adviser = db.adviser;
const Op = db.Sequelize.Op;

 // Create and Save a new Adviser
 exports.create = (req, res) => {
    // Validate request
    if (!req.body.adviser_name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Adviser
    const adviser = {
      person_id: req.body.person_id,
      adviser_name: req.body.adviser_name,
      adviser_description: req.body.adviser_description,
      adviser_Type: req.body.adviser_Type
    };
  
    // Save Adviser in the database
    Adviser.create(adviser)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Adviser."
        });
      });
  };
  
// Retrieve all Adviser from the database.
exports.findAll = (req, res) => {
    const adviser_name = req.query.adviser_name;
    var condition = adviser_name ? { adviser_name: { [Op.iLike]: `%${adviser_name}%` } } : null;
  
    Adviser.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Adviser."
        });
      });
  };