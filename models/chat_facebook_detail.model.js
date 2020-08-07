module.exports = (sequelize, Sequelize) => {
    const Chat_facebook_detail = sequelize.define("chat_facebook_detail", {
        detail_id: {
            type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
          },
          customer_facebook_id: {
            type: Sequelize.INTEGER
          },
          session_id: {
            type: Sequelize.INTEGER
          },
          adviser_id: {
            type: Sequelize.INTEGER
          },
          name: {
            type: Sequelize.STRING(100)
          },
          response_type: {
            type: Sequelize.INTEGER
          },
          response_msg: {
            type: Sequelize.TEXT
          },
          response_status: {
            type: Sequelize.INTEGER
          },
          response_datetime: {
            type: Sequelize.DATE
          },
          response_msg_recibed: {
            type: Sequelize.BOOLEAN
          },
          response_msg_read: {
            type: Sequelize.BOOLEAN
          }
    },{
      timestamps: false
    });
  
    return Chat_facebook_detail;
  };
  