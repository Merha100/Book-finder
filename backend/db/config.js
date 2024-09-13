const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connected Successfully.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = sequelize;