import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("work fine");
});

app.listen(3000, () => {
  console.log("app run on port 3000");
});
