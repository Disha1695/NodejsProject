console.log("start");
setTimeout(() => {
  console.log("'timeout calllback");
}, 1000);
Promise.resolve().then(() => console.log("promise resolved"));
console.log("end");

import { Sequelize } from "sequelize";

const sequelize = new Sequelize("nftverse", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

try {
  await sequelize.authenticate();
  console.log("Database connected successfully");
} catch (err) {
  console.error("Database connection failed:", err);
}

export default sequelize;
