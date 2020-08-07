module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
        customer_id:{
            type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
        },
        chanel_id:{
            type: Sequelize.INTEGER
        },
        customer_name: {
            type: Sequelize.STRING(100)
       }
    },{
        timestamps: false
    });
  
    return Customer;
  };
  