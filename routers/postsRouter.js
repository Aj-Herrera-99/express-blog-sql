const express = require("express");
const router = express.Router();
const { index } = require("../controllers/postsController");

router.get("/", index);

module.exports = router;
