const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/nodejs_demo_dev");
    console.log("connect successfully!!!");
  } catch (error) {
    console.log("connect fail!!!");
  }
};

module.exports = { connect };
