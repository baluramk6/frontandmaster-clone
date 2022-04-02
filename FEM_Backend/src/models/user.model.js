const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmpassword: { type: String, required: true },
    cardnumber: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});
userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

//==============================================================

userSchema.pre("save", function (next) {
  const hash = bcrypt.hashSync(this.confirmpassword, 8);
  this.confirmpassword = hash;
  return next();
});
userSchema.methods.checkPassword = function (confirmpassword) {
  return bcrypt.compareSync(confirmpassword, this.confirmpassword);
};


const User = mongoose.model("user", userSchema);
module.exports = User;

// firstName: { type: String, required: false },
// lastName: { type: String, required: false },
// email: { type: String, required: false },
// password: { type: String, required: false },
// confirmPassword: { type: String, required: false },
// age: { type: Number, required: false },
// cardNumber: { type: String, required: false }