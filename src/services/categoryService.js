import { prismaClient } from "../application/database.js";
import { ResponseError } from "../errors/responseError.js";
import { createOptionValidation } from "../validation/optionValidation.js";
import { validate } from "../validation/validate.js";
import { v4 as uuidv4 } from "uuid";

const createCategory = async (req) => {
  const category = validate(createOptionValidation, req);

  const countCategory = await prismaClient.category.count({
    where: {
      title: category.title,
    },
  });

  if (countCategory === 1) {
    throw new ResponseError(400, "Category already exists");
  }

  // category.id = uuidv4();

  return prismaClient.category.create({
    data: {
      id: uuidv4(),
      title: category.title,
      desc: category.desc,
    },
    select: {
      title: true,
      desc: true,
    },
  });
};

export default {
  createCategory,
};
