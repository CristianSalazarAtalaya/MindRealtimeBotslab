const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.chanels = require("./chanels.model.js")(sequelize, Sequelize);

db.adviser = require("./adviser.model.js")(sequelize, Sequelize);
db.chat_facebook_detail = require("./chat_facebook_detail.model.js")(sequelize, Sequelize);
db.chat_facebook_session_active = require("./chat_facebook_session_active.model.js")(sequelize, Sequelize);
db.chat_facebook_session = require("./chat_facebook_session.model.js")(sequelize, Sequelize);

db.customer = require("./customer.model.js")(sequelize, Sequelize);
db.customer_facebook = require("./customer_facebook.model.js")(sequelize, Sequelize);
db.people = require("./people.model.js")(sequelize, Sequelize);

module.exports = db;
