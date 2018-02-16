import bodyParser from "body-parser";
import express from "express";
import { apiErrorHandler } from "../apiErrorHandler";

const setGlobalMiddleware = (app: express.Express) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  
};
export default setGlobalMiddleware;
