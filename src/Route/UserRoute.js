const express = require("express");
const { addUser } = require("../Controller/UserController");
const router = express.Router();

router.post("/addUser", addUser);

module.exports = router;
