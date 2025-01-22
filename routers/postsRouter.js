const express = require("express");
const router = express.Router();
const { index, destroy } = require("../controllers/postsController");

// index
router.get("/", index);

// destroy
router.delete("/:id", destroy);

module.exports = router;
