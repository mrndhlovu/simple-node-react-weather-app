const router = require("express").Router();
const User = require("../models/User");

router.get("/login", async (req, res) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

module.exports = router;
