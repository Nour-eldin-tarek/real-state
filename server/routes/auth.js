const express = require("express");
const router = express.Router();
const { User } = require("../models/users");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const _ = require("lodash");


router.post("/", async (req, res) => {
  const { error } = handleAuthValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages); // Send all error messages
  }

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid Credentials");

  let validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid Credentials");
  const token = user.generateAuthToken();
  res
    .header("x-auth-token", token)
    .redirect("/courses");
});

function handleAuthValidation(user) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(225).required().email(),
    password: Joi.string().min(5).max(1024).required(),
  });
  return schema.validate(user, { abortEarly: false });
}

module.exports = router;
