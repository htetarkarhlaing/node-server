import { User } from "../models";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";
import { Mail } from "../utilities";

interface IUserRegister {
  username: string;
  email: string;
  password?: string;
  role?: string;
  token?: string;
}

const userRegister = async (req: Request, res: Response) => {
  //user register interface
  interface UserRegisterProps {
    username: string;
    email: string;
    password: string;
    role: string;
  }

  //user input data
  const { username, email, password, role }: UserRegisterProps = req.body;

  try {
    //user inserting
    const newUser: IUserRegister = {
      username,
      password,
      email,
      role,
    };
    if (newUser) {
      const { username, email, password, role } = newUser;
      //verification token generating
      const token = jwt.sign(
        {
          username,
          email,
          password,
          role,
        },
        process.env.APP_SECRET,
        { expiresIn: "24hr" }
      );
      const link = `${process.env.CLIENT_URL}/account-confirm/${token}`;
      const subject = "PLease confirm your account";

      //importing template
      const registerHandlebar = fs.readFileSync(
        path.join(__dirname, "../views/register.hbs"),
        "utf8"
      );
      const registerTemplate = handlebars.compile(registerHandlebar);

      //sending mail to user email to confirm account
      Mail.send(
        { mailTo: email, subject, html: registerTemplate({ link }) },
        (err, data) => {
          if (err) {
            return res.status(500).json({
              meta: {
                success: false,
                message: "internal-server-error",
              },
            });
          }
          if (data) {
            return res.status(201).json({
              meta: {
                success: true,
                message: "created",
              },
            });
          } else {
            return res.status(402).json({
              meta: {
                success: false,
                message: "something-went-wrong",
              },
            });
          }
        }
      );
    } else {
      return res.status(503).json({
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

const userEmailActiviate = async (req: Request, res: Response) => {
  const token = req.params.token;

  if (token) {
    jwt.verify(
      token,
      process.env.APP_SECRET,
      async (err: any, decodedToken: any) => {
        if (err) {
          return res.status(500).json({
            meta: {
              success: false,
              message: "internal-server-error",
            },
          });
        } else if (decodedToken) {
          const newUser = await User.create(decodedToken);
          return res.status(201).json({
            meta: {
              success: true,
              message: "user-created",
            },
            data: newUser,
          });
        }
      }
    );
  } else {
    return res.status(400).json({
      meta: {
        success: true,
        message: "something-went-wrong",
      },
    });
  }
};

const UserController = {
  userRegister,
  userEmailActiviate,
};

export default UserController;
