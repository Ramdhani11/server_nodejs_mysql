import { prismaClient } from "../application/database.js";
import { ResponseError } from "../errors/responseError.js";
import { createOptionValidation } from "../validation/optionValidation.js";
import { validate } from "../validation/validate.js";
import { v4 as uuidv4 } from "uuid";

const createTheme = async (req) => {
  const theme = validate(createOptionValidation, req);

  const countTheme = await prismaClient.theme.count({
    where: {
      title: theme.title,
    },
  });

  if (countTheme === 1) {
    throw new ResponseError(400, "Theme already exists");
  }
  theme.id = uuidv4();
  return prismaClient.theme.create({
    data: theme,
    select: {
      title: true,
      desc: true,
    },
  });
};

export default {
  createTheme,
};
