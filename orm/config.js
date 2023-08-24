const Sequelize = require('sequelize')

// hardcoded credentials for demo purposes only
// database, username, password
const sequelize = new Sequelize(
    'node_express_postgres_demo', 'node_express_postgres_demo', 'password',
    {dialect: 'postgres'}
)

const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };

module.exports = {sq: sequelize, testDbConnection}