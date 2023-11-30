import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import { errorMiddleware } from "../middleware/errorMiddleware.js";
import { publicRouter } from "../routes/publicApi.js";
// import dotenv from 'dotenv'
import path from "path";

export const app = express();

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join("public")));

app.use("/api/v1", publicRouter);

app.use(errorMiddleware);

app.disable("x-powered-by");
