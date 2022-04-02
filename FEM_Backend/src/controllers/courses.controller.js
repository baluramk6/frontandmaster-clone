const express = require("express");

const router = express.Router();

const Courses = require("../models/courses.model");

router.get("", async (req, res) => {
  try {
    const courses = await Courses.find().lean().exec();
    return res.status(200).send(courses);
  } catch (err) {
    return res.status(500).send({ message: message.err });
  }
});

module.exports = router;
