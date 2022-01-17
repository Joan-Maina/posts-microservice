const joi = require("joi");

module.exports = (user) => {
  const schema = joi.object({
    postTitle: joi.string().required(),
    details: joi.string().required(),
  });
  return schema.validate(user);
};
