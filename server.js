import fetch from "node-fetch";
import express from "express";
import cors from "cors";
import "dotenv/config";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", async (req, res) => {
  await fetch(req.body.url)
    .then((response) => response.json())
    .then((resJosn) => {
      res.status(200).send(resJosn);
    });
});

app.listen(PORT, () => {
  console.log("server is starting on port", PORT);
});
