import { prismaClient } from "../application/database.js";
import { logger } from "../application/logging.js";
import { ResponseError } from "../errors/responseError.js";
import { styleValidation } from "../validation/styleValidation.js";
import { validate } from "../validation/validate.js";
import { v4 as uuidv4 } from "uuid";

const createStyle = async (req) => {
  const style = validate(styleValidation, req);

  const countStyle = await prismaClient.style.count({
    where: {
      title: style.title,
    },
  });

  if (countStyle === 1) {
    throw new ResponseError(400, "Style already exists");
  }

  style.id = uuidv4();

  return prismaClient.style.create({
    data: style,
    select: {
      id: true,
      category_id: true,
      desc: true,
    },
  });
};

export default {
  createStyle,
};
