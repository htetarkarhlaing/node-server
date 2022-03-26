// importing required packages
import "dotenv/config";
import express from "express";
import {
  createProxyMiddleware,
  Filter,
  Options,
  RequestHandler,
} from "http-proxy-middleware";
import cors from "cors";
import fetch from "cross-fetch";

//ENV
const PORT = process.env.PORT || 8000;

//express server instance
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/", (req: express.Request, res: express.Response) => {
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
