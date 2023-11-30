import { prismaClient } from "../application/database.js";
import { logger } from "../application/logging.js";
import { ResponseError } from "../errors/responseError.js";
import { createAssetValidation } from "../validation/assetValidation.js";
import { validate } from "../validation/validate.js";

const createAsset = async (req) => {
  const asset = await validate(createAssetValidation, req);

  const countAsset = await prismaClient.asset.count({
    where: {
      id: asset.id,
    },
  });

  if (countAsset === 1) {
    throw new ResponseError(400, "Asset already exists");
  }

  logger.info({ asset });
  return prismaClient.asset.create({
    data: asset,
  });
};

export default {
  createAsset,
};
