const db = require("../models");
const Customer_facebook = db.customer_facebook;
const Op = db.Sequelize.Op;


// Create and Save a new Customer_facebook
exports.create = (req, res) => {
    // Validate request
    if (!req.body.customer_name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a customer of facebook
    const customer_facebook = {
        customer_id: req.body.customer_id,
        customer_name: req.body.customer_name,
        facebook_identifier: req.body.facebook_identifier,
        status: req.body.status ? req.body.status : 1,
        observation: req.body.observation,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
    };
  
    // Save customer of facebook in the database
    Customer_facebook.create(customer_facebook)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the customer of facebook."
        });
      });
  };
  
// Retrieve all Customer of facebook from the database.
exports.findAll = (req, res) => {
    const customer_name = req.query.customer_name;
    var condition = customer_name ? { customer_name: { [Op.iLike]: `%${customer_name}%` } } : null;
  
    Customer_facebook.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers of facebook."
        });
      });
  };