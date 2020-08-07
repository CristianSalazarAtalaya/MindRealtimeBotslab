const db = require("../models");
const Customer = db.customer;
const Op = db.Sequelize.Op;


// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body.customer_name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const customer = {
        chanel_id: req.body.chanel_id,
        customer_name: req.body.customer_name
    };
  
    // Save Tutorial in the database
    Customer.create(customer)
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
  
// Retrieve all Customer from the database.
exports.findAll = (req, res) => {
    const customer_name = req.query.customer_name;
    var condition = customer_name ? { customer_name: { [Op.iLike]: `%${customer_name}%` } } : null;
  
    Customer.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      });
  };