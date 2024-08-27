import express, { Express, Request, Response } from "express";
import { PORT } from "./secrets";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("work fine");
});

app.listen(PORT, () => {
  console.log("app run on port 3000");
});
