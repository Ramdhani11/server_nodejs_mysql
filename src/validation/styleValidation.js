import Joi from "joi";

const styleValidation = Joi.object({
  title: Joi.string().max(100).required(),
  desc: Joi.string().max(100),
  category_id: Joi.string().max(255),
});

export { styleValidation };
