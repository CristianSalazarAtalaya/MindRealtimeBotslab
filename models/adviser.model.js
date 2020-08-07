module.exports = (sequelize, Sequelize) => {
    const Adviser = sequelize.define("adviser", {
        adviser_id:{
            type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
        },
        person_id:{
            type: Sequelize.INTEGER
        },
        adviser_name: {
            type: Sequelize.STRING(100)
        },
        adviser_description: {
            type: Sequelize.TEXT
        },
        adviser_Type:{
            type: Sequelize.INTEGER
        }
        /*,
        adviser_Created: {
            type: Sequelize.DATE
        },
        adviser_Updated: {
            type: Sequelize.DATE
        }
        */
    }
    );
  
    return Adviser;
  };
  