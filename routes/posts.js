const express = require("express");
const router = express.Router();

const {
  addpost,
  fetchopportunites,
  fetch,
  addopportunity,
} = require("../controllers/posts");

router.post("/add", addpost);
router.post("/fetch", fetch);
router.get("/fetchopportunites", fetchopportunites);
router.post("/addopportunity", addopportunity);

module.exports = router;
