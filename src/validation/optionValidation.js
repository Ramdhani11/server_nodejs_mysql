import Joi from "joi";

const createOptionValidation = Joi.object({
  title: Joi.string().max(100).required(),
  desc: Joi.string().max(100),
});

export { createOptionValidation };
