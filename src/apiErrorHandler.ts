// import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

export const apiErrorHandler = (
  error: any,
  req: any,
  res: any,
  next: any
) => {
  console.log("Error III ", error);
  res.status(500).send("error");
  next();
};
