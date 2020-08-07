module.exports = (sequelize, Sequelize) => {
    const People = sequelize.define("people", {
      person_id: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
      },
      chanel_id: {
        type: Sequelize.INTEGER
      }
    },{
      timestamps: false
    });
  
    return People;
  };
  