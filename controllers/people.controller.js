const db = require("../models");
const People = db.people;
const Op = db.Sequelize.Op;

// Crear y guardar una nueva persona
exports.create = (req, res) => {
  // Validate request
  if (!req.body.chanel_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
    }

    // Crear una persona
    const people = {
    chanel_id: req.body.chanel_id
  };

  //Guardar persona en la base de datos
  People.create(people)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Person."
      });
    });
}


// Retrieve all People from the database.
exports.findAll = (req, res) => {
  const chanel_id = req.query.chanel_id;
  var condition = chanel_id ? { chanel_id: { [Op.iLike]: `%${chanel_id}%` } } : null;

  People.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving people."
      });
    });
};