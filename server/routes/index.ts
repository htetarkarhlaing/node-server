//importing required packages
import express from "express";

//importing custom controllers
import proxyServerRoutes from "./proxyServer";
import authRoutes from "./auth";

//auth middleware

// router setup
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Hey");
});

//route list
routes.use("/proxy", proxyServerRoutes);
routes.use("/api/auth", authRoutes);

export default routes;
