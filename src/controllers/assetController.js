import assetService from "../services/assetService.js";
import { v4 as uuid } from "uuid";
import { prismaClient } from "../application/database.js";
import fs from "fs";
import { logger } from "../application/logging.js";

const createAsset = async (req, res, next) => {
  try {
    let finalImageURL =
      req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename;

    req.body.image = req.file.filename;
    req.body.url = finalImageURL;
    // req.body.price = parseInt(req.body.price);

    req.body.id = uuid();

    await assetService.createAsset(req.body);

    // logger.info(req.body);
    // fs.unlinkSync(`./public/uploads/${req.file.filename}`);

    res.status(201).json({
      mssg: "Asset created",
    });
  } catch (error) {
    // fs.unlinkSync(`./public/uploads/${req.file?.filename}`);
    next(error);
  }
};

const getAssets = async (req, res, next) => {
  const { limit, page, search } = req.query;

  // per-page=4 & page =1
  const startWith = (Number(page) - 1) * Number(limit);

  try {
    const allAsset = await prismaClient.asset.count({
      where: {
        OR: [
          {
            title: {
              contains: search || "",
            },
          },
        ],
      },
    });
    const result = await prismaClient.asset.findMany({
      include: {
        category: true,
        theme: true,
        style: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: Number(startWith) || 0,
      take: Number(limit) || 4,
      where: {
        OR: [
          {
            title: {
              contains: search || "",
            },
          },
        ],
      },
    });

    res.status(200).json({
      data: result,
      count: allAsset,
    });
  } catch (error) {
    next(error);
  }
};

const getAsset = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await prismaClient.asset.findFirst({
      where: {
        id,
      },
    });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateAsset = async (req, res, next) => {
  const { id } = req.params;

  const data = req.body;

  try {
    const asset = await prismaClient.asset.findUnique({
      where: {
        id,
      },
    });

    if (req.file === undefined) {
      data.image = asset.image;
      data.url = asset.url;
      data.price = parseInt(data.price);
    } else {
      fs.unlinkSync(`./public/uploads/${asset.image}`);

      let finalImageURL =
        req.protocol +
        "://" +
        req.get("host") +
        "/uploads/" +
        req.file.filename;
      data.image = req.file.filename;
      data.url = finalImageURL;
      data.price = parseInt(data.price);
    }

    await prismaClient.asset.update({
      where: {
        id,
      },
      data,
    });

    res.status(200).json({
      mssh: "Asset updated",
    });
  } catch (error) {
    next(error);
  }
};

const deleteAsset = async (req, res, next) => {
  const { id } = req.params;
  try {
    const asset = await prismaClient.asset.findUnique({
      where: {
        id,
      },
    });

    fs.unlinkSync(`./public/uploads/${asset.image}`);

    await prismaClient.asset.delete({
      where: {
        id,
      },
    });
    res.status(200).json({
      mssg: "Deleted asset",
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createAsset,
  updateAsset,
  deleteAsset,
  getAssets,
  getAsset,
};
