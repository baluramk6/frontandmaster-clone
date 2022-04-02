const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.json());

const { register, login } = require("./controllers/auth.controller");

app.post("/register", register);
app.post("/login", login);

const coursesController = require("./controllers/courses.controller");

app.use("/courses", coursesController);


module.exports = app;
