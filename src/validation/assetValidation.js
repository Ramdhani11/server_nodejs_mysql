import Joi from "joi";

const createAssetValidation = Joi.object({
  id: Joi.string().max(255).required(),
  desc: Joi.string().max(100).required(),
  title: Joi.string().max(100).required(),
  category_id: Joi.string().required(),
  image: Joi.string().required(),
  url: Joi.string().required(),
  theme_id: Joi.string().required(),
  style_id: Joi.string().required(),
  price: Joi.number().required(),
});

export { createAssetValidation };
