import express, { Express, Request, Response } from "express";
import { PORT } from "./secrets";
import rootRouter from "../routes";
import { PrismaClient } from "@prisma/client";

const app: Express = express();

// json parse
app.use(express.json());

app.use("/api", rootRouter);

// setup prisman client
export const prismaClient = new PrismaClient({
  log: ["query"],
});

app.listen(PORT, () => {
  console.log("app run on port 3000");
});
