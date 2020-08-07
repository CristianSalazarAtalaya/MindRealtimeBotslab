module.exports = (sequelize, Sequelize) => {
    const Chat_facebook_session_active = sequelize.define("chat_facebook_session_active", {
        session_active_id: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
      },
      session_id: {
        type: Sequelize.INTEGER
      },
      customer_facebook_id: {
        type: Sequelize.INTEGER
      },
      customer_name: {
        type: Sequelize.STRING(100)
      },
      adviser_id: {
        type: Sequelize.INTEGER
      },
      adviser_name: {
        type: Sequelize.STRING(100)
      },
      status: {
        type: Sequelize.INTEGER
      },
      date_create: {
        type: Sequelize.DATE
      },
      date_updated: {
        type: Sequelize.DATE
      }
    },{
      timestamps: false
    });
  
    return Chat_facebook_session_active;
  };
  