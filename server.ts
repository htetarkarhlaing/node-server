import "dotenv/config";
import express from "express";
import cors from "cors";
import fetch from "cross-fetch";

//PORT
const PORT = process.env.PORT || 8000;

const app = express();
//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/", (req: any, res: any) => {
  res.status(200).json("Hello World");
});

app.post("/", async (req: any, res: any) => {
  await fetch(req.body.url)
    .then((response: any) => response.json())
    .then((resJosn: any) => {
      res.status(200).send(resJosn);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(PORT, () => {
  console.log("server is starting on port", PORT);
});
