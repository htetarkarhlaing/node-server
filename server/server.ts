// importing required packages
import "dotenv/config";
import express from "express";
import cors from "cors";

import { Mail } from "./utilities";

//importing custom packages
import DBConnector from "./config/db.config";
import routes from "./routes";

//ENV
const PORT = process.env.PORT || 8000;

//express server instance
const app = express();
const httpServer = require("http").Server(app);
const io = require("socket.io")(httpServer);

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
DBConnector();

//routes
app.use("/", routes);

//socket event handlers
io.on("connection", function (socket: any) {
  console.log("a user connected", socket);
});

app.listen(PORT, () => {
  console.log("server is starting on port", PORT);
});
