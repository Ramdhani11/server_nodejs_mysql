import { prismaClient } from "../application/database.js";
import { ResponseError } from "../errors/responseError.js";
import { registerUserValidation } from "../validation/userValidation.js";
import { validate } from "../validation/validate.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

const register = async (req) => {
  const user = validate(registerUserValidation, req);

  const countUser = await prismaClient.user.count({
    where: {
      email: user.email,
    },
  });

  if (countUser === 1) {
    throw new ResponseError(400, "User already exists");
  }

  user.id = uuidv4();
  user.password = await bcrypt.hash(user.password, 10);
  user.role_id = 1;

  return prismaClient.user.create({
    data: user,
    select: {
      name: true,
      email: true,
    },
  });
};

export default {
  register,
};
