const db = require("../models");
const Chat_facebook_detail = db.chat_facebook_detail;
const Op = db.Sequelize.Op;

 // Create and Save a new Chat_facebook_detail
 exports.create = (req, res) => {
    // Validate request
    if (!req.body.customer_facebook_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a chat_facebook_detail
    const chat_facebook_detail = {
      customer_facebook_id: req.body.customer_facebook_id,
      session_id: req.body.session_id,
      adviser_id: req.body.adviser_id,
      name: req.body.name,
      response_type: req.body.response_type,
      response_msg: req.body.response_msg,
      response_status: req.body.response_status,
      response_datetime: req.body.response_datetime,
      response_msg_recibed: req.body.response_msg_recibed,
      response_msg_read: req.body.response_msg_read
    };
  
    // Save chat_facebook_detail in the database
    Chat_facebook_detail.create(chat_facebook_detail)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the chat_facebook_detail."
        });
      });
  };
  
  // Retrieve all Chat_facebook_detail from the database.
exports.findAll = (req, res) => {
    const session_id = req.query.session_id;
    var condition = session_id ? { session_id: { [Op.iLike]: `%${session_id}%` } } : null;
  
    Chat_facebook_detail.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Chat_facebook_detail."
        });
      });
  };