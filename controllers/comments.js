const validate = require("../helpers/validate");
const connection = require("../configDb");
const addcomment = async (req, res) => {
  try {
    // let { postdata } = req.body;
    let { details, postid } = req.body;
    const { error } = await validate({ details, postid });
    if (error) {
      res.status(400).send(error);
    }
    await connection.execute("addcomment", { details, postid });

    res.status(201).send("post successfully added");
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
};
const fetchcomments = async (req, res) => {
  try {
    let { postid } = req.body;
    console.log(req.body);
    let { recordset } = await connection.execute("fetchcomments", { postid });
    console.log(recordset);
    res.status(201).send(recordset);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

module.exports = {
  addcomment,
  fetchcomments,
};
