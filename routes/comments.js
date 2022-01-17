const express = require("express");
const router = express.Router();

const { addcomment, fetchcomments } = require("../controllers/comments");

router.post("/add", addcomment);
router.post("/fetch", fetchcomments);

module.exports = router;
