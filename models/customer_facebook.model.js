module.exports = (sequelize, Sequelize) => {
    const Customer_facebook = sequelize.define("customer_facebook", {
        customer_facebook_id :{
            type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
        },
        customer_id:{
            type: Sequelize.INTEGER
        },
        customer_name: {
            type: Sequelize.STRING(100)
        },
        facebook_identifier: {
            type: Sequelize.STRING(100)
        },
        status:{
            type: Sequelize.INTEGER, default : 1
        },
        observation: {
            type: Sequelize.TEXT
        }
        /*,
        date_register: {
            type: Sequelize.DATE
        },
        date_updated: {
            type: Sequelize.DATE
        }*/
    });
    return Customer_facebook;
  };
  