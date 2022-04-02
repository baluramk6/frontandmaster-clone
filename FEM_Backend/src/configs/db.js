const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://abc12:abc12@cluster0.bjtpv.mongodb.net/web15?retryWrites=true&w=majority"
  );
};
module.exports = connect;
