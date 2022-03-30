import express from "express";

//cusotm imports
import RoleController from "../../controllers/Role.controller";
import UserController from "../../controllers/User.controller";

const authRoutes = express.Router();

//roles
authRoutes.get("/roles/", RoleController.roleListFetcher);
authRoutes.post("/roles/create", RoleController.roleRegister);
//users
authRoutes.post("/register", UserController.userRegister);
authRoutes.post("/login");
authRoutes.get("/activiate/:token", UserController.userEmailActiviate);

export default authRoutes;
