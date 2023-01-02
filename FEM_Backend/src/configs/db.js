const mongoose = require("mongoose")
require("dotenv").config()

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.tlhgve8.mongodb.net/mydb?retryWrites=true&w=majority`
  );
};

module.exports = connect;


  // "mongodb+srv://baluramk:baluramk@cluster0.tlhgve8.mongodb.net/mydb?retryWrites=true&w=majority"
  //Chandrakant: "mongodb+srv://abc12:abc12@cluster0.bjtpv.mongodb.net/web15?retryWrites=true&w=majority"