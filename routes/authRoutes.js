
const express = require("express");
const router = express.Router();

const { register, loginUser, logout } = require("../controllers/authController");


router.post("/register", register);
router.post("/login", loginUser);
router.post("/logout", logout);

module.exports = router;
