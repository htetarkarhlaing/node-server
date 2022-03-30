import { Role } from "../models";
import { Request, Response } from "express";

interface IRole {
  role: string;
}

const roleRegister = async (req: Request, res: Response) => {
  const { role } = req.body;

  try {
    const newRole: IRole = await Role.create({
      role,
    });
    if (newRole) {
      return res.status(201).json({
        meta: {
          success: true,
          message: "Role added successfully.",
        },
        data: {
          role: newRole,
        },
      });
    } else {
      return res.status(400).json({
        meta: {
          success: false,
          message: "something-went-wrong",
        },
      });
    }
  } catch (err) {
    return res.status(500).json({
      meta: {
        success: false,
        message: err,
      },
    });
  }
};

const roleListFetcher = async (req: Request, res: Response) => {
  try {
    const roleList = await Role.find();
    if (roleList) {
      return res.status(200).json({
        meta: {
          success: true,
          message: "Role list fetched successfully.",
        },
        data: {
          role: roleList,
        },
      });
    } else {
      return res.status(400).json({
        meta: {
          success: false,
          message: "something-went-wrong",
        },
      });
    }
  } catch (err) {
    return res.status(500).json({
      meta: {
        success: false,
        message: err,
      },
    });
  }
};

const RoleController = {
  roleRegister,
  roleListFetcher,
};

export default RoleController;
