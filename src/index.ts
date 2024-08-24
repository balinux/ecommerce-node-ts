import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("work fine");
});

app.listen(3000, () => {
  console.log("app run on port 3000");
});
