import express from "express";
import SetupMiddleware from "./middlewares/SetupMiddleware";
import { apiErrorHandler } from "./apiErrorHandler";

const app = express();
SetupMiddleware(app);

app.post("/api", (req: express.Request, res: express.Response) => {
  console.log(req.body);
  const { name } = req.body;
  if (name === "sartawi") {
    throw new Error("Wrong");
  }
  res.json(req.body);
});

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
      console.log(err);
      res.status(500).send("errrroror");
  }
);

app.listen(4000, () => {
  console.log("listening on port 4000");
});
