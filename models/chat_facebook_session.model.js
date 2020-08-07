module.exports = (sequelize, Sequelize) => {
    const Chat_facebook_session = sequelize.define("chat_facebook_session", {
        session_id: {
            type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
        },
        customer_facebook_id: {
            type: Sequelize.INTEGER
        },
        adviser_id_initiated: {
            type: Sequelize.INTEGER
        },
        adviser_id_finalized: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.INTEGER, default:  1
        },
        adviser_name: {
            type: Sequelize.STRING(100)
        }
    },{
        timestamps: true
    });
  
    return Chat_facebook_session;
  };
  