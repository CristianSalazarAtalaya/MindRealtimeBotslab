module.exports = (sequelize, Sequelize) => {
    const Chanels = sequelize.define("chanels", {
        chanel_id :{
            type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
        },
        chanel_name: {
            type: Sequelize.STRING(40)
        },
        chanel_description: {
            type: Sequelize.TEXT
        },
        chanel_link: {
        type: Sequelize.TEXT
      }
    },{
        timestamps: false
    });
  
    return Chanels;
  };
  