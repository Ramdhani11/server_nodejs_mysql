import express from "express";
import userController from "../controllers/userController.js";
import optionController from "../controllers/optionController.js";
import assetController from "../controllers/assetController.js";
import { upload } from "../middleware/fileHandler.js";

const publicRouter = new express.Router();

// assets
publicRouter.post(
  "/asset",
  upload.single("photo"),
  assetController.createAsset
);
publicRouter.get("/asset", assetController.getAssets);
publicRouter.get("/asset/:id", assetController.getAsset);
publicRouter.delete("/asset/:id", assetController.deleteAsset);
publicRouter.patch(
  "/asset/:id",
  upload.single("photo"),
  assetController.updateAsset
);

// category
publicRouter.post("/category", optionController.createCategory);
publicRouter.get("/category", optionController.getCategories);
publicRouter.get("/category/:id", optionController.getCategory);
publicRouter.delete("/category/:id", optionController.deleteCategory);
publicRouter.patch("/category/:id", optionController.updateCategory);

// auth & user
publicRouter.post("/register", userController.register);

// style
publicRouter.post("/style", optionController.createStyle);
publicRouter.get("/style", optionController.getStyles);
publicRouter.get("/style/:id", optionController.getStyle);
publicRouter.get("/style/filter/:id", optionController.getStyleByCategory);
publicRouter.delete("/style/:id", optionController.deleteStyle);
publicRouter.patch("/style/:id", optionController.updateStyle);

// theme
publicRouter.post("/theme", optionController.createTheme);
publicRouter.get("/theme", optionController.getThemes);
publicRouter.get("/theme/:id", optionController.getTheme);
publicRouter.delete("/theme/:id", optionController.deleteTheme);
publicRouter.patch("/theme/:id", optionController.updateTheme);

export { publicRouter };
