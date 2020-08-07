const db = require("../models");
const Chat_Facebook_Session = db.chat_facebook_session;
const Op = db.Sequelize.Op;


 // Create and Save a new Chat_Facebook_Session
 exports.create = (req, res) => {
    // Validate request
    if (!req.body.customer_facebook_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Adviser
    const chat_Facebook_Session = {
      customer_facebook_id: req.body.customer_facebook_id,
      adviser_id_initiated: req.body.adviser_id_initiated,
      adviser_name: req.body.adviser_name,
      status: req.body.status ? req.body.status : 1
    };
  
    // Save Adviser in the database
    Chat_Facebook_Session.create(chat_Facebook_Session)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the chat_Facebook_Session."
        });
      });
  };


  // Retrieve all Chat_Facebook_Session from the database.
exports.findAll = (req, res) => {
    const customer_facebook_id = req.query.customer_facebook_id;
    var condition = customer_facebook_id ? { customer_facebook_id: { [Op.iLike]: `%${customer_facebook_id}%` } } : null;
  
    Chat_Facebook_Session.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Chat_Facebook_Session."
        });
      });
  };