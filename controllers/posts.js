const validate = require("../helpers/validate");
const connection = require("../configDb");
const addpost = async (req, res) => {
  try {
    let { postdata } = req.body;
    let { postTitle, details } = postdata;
    const { error } = await validate({ postTitle, details });
    if (error) {
      res.status(400).send(error);
    }
    await connection.execute("addpost", { postTitle, details });
    res.status(201).send("post successfully added");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const fetch = async (req, res) => {
  console.log("joan");

  try {
    let { recordset } = await connection.execute("fetchposts");
    console.log(recordset);
    res.status(201).send(recordset);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const fetchopportunites = async (req, res) => {
  try {
    console.log("jo");
    let { recordset } = await connection.execute("fetchallopportunities");
    res.status(201).send(recordset);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

const addopportunity = async (req, res) => {
  try {
    console.log(req.body);
    let { name, employer, details } = req.body;
    console.log(employer);
    await connection.execute("addopportunity", {
      name,
      employer,
      details,
    });
    res.status(201).send("successfully added");
  } catch (error) {
    console.log(error.message);
    res.status(400).send(errror.message);
  }
};
module.exports = {
  addpost,
  fetchopportunites,
  fetch,
  addopportunity,
};
