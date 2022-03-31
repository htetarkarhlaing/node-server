import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const proxyServerRoutes = express.Router();

proxyServerRoutes.use(
  "/",
  createProxyMiddleware({
    target: "http://www.example.org",
    changeOrigin: true,
  })
);

export default proxyServerRoutes;
