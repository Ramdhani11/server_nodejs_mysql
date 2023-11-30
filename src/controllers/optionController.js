import { prismaClient } from "../application/database.js";
import { logger } from "../application/logging.js";
import categoryService from "../services/categoryService.js";
import styleService from "../services/styleService.js";
import themeService from "../services/themeService.js";

//Categories

const createCategory = async (req, res, next) => {
  try {
    const result = await categoryService.createCategory(req.body);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getCategories = async (req, res, next) => {
  try {
    const result = await prismaClient.category.findMany();

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await prismaClient.category.findUnique({
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

const updateCategory = async (req, res, next) => {
  const { id } = req.params;
  const { title, desc } = req.body;

  try {
    const result = await prismaClient.category.update({
      where: {
        id,
      },
      data: {
        title,
        desc,
      },
    });

    res.status(200).json({
      result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    await prismaClient.category.delete({
      where: {
        id,
      },
    });

    res.status(200).json({
      mssg: "Category deleted",
    });
  } catch (error) {
    next(error);
  }
};

// Style

const createStyle = async (req, res, next) => {
  // logger.info(req.body);
  try {
    const result = await styleService.createStyle(req.body);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getStyles = async (req, res, next) => {
  try {
    const result = await prismaClient.style.findMany({
      include: {
        category: true,
      },
    });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getStyleByCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await prismaClient.style.findMany({
      where: {
        category_id: id,
      },
    });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getStyle = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await prismaClient.style.findUnique({
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

const updateStyle = async (req, res, next) => {
  const { id } = req.params;
  const { title, desc } = req.body;

  try {
    const result = await prismaClient.style.update({
      where: {
        id,
      },
      data: {
        title,
        desc,
      },
    });

    res.status(200).json({
      result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStyle = async (req, res, next) => {
  try {
    const { id } = req.params;

    await prismaClient.style.delete({
      where: {
        id,
      },
    });

    res.status(200).json({
      mssg: "Category deleted",
    });
  } catch (error) {
    next(error);
  }
};

// Theme

const createTheme = async (req, res, next) => {
  try {
    const result = await themeService.createTheme(req.body);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getThemes = async (req, res, next) => {
  try {
    const result = await prismaClient.theme.findMany();

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getTheme = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await prismaClient.theme.findUnique({
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

const updateTheme = async (req, res, next) => {
  const { id } = req.params;
  const { title, desc } = req.body;

  try {
    const result = await prismaClient.theme.update({
      where: {
        id,
      },
      data: {
        title,
        desc,
      },
    });

    res.status(200).json({
      result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTheme = async (req, res, next) => {
  try {
    const { id } = req.params;

    await prismaClient.theme.delete({
      where: {
        id,
      },
    });

    res.status(200).json({
      mssg: "Category deleted",
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createTheme,
  getThemes,
  getTheme,
  deleteTheme,
  updateTheme,
  createStyle,
  getStyles,
  getStyle,
  updateStyle,
  deleteStyle,
  createCategory,
  getCategories,
  getCategory,
  deleteCategory,
  updateCategory,
  getStyleByCategory,
};
