import { User } from "../models";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";
import { Mail, Responser } from "../utilities";

interface IUserRegister {
  _id?: string;
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
    const existingUser = await User.find({ email: email });
    if (existingUser) {
      Responser({
        res,
        status: 402,
        body: null,
        message: "Email already exist.",
        devMessage: "something-went-wrong",
      });
    } else {
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
              Responser({
                res,
                status: 500,
                body: null,
                message: "internal-server-error",
                devMessage: err,
              });
            }
            if (data) {
              Responser({
                res,
                status: 201,
                body: null,
                message: "confirmation-mail-sent",
                devMessage: "created",
              });
            } else {
              Responser({
                res,
                status: 402,
                body: null,
                message: "something-went-wrong",
                devMessage: "something-went-wrong",
              });
            }
          }
        );
      } else {
        Responser({
          res,
          status: 503,
          body: null,
          message: "something-went-wrong",
          devMessage: "something-went-wrong",
        });
      }
    }
  } catch (err) {
    Responser({
      res,
      status: 500,
      body: null,
      message: "internal-server-error",
      devMessage: err,
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
          Responser({
            res,
            status: 500,
            body: null,
            message: "internal-server-error",
            devMessage: err,
          });
        } else if (decodedToken) {
          const newUser = await User.create(decodedToken);
          Responser({
            res,
            status: 201,
            body: newUser,
            message: "confirmation-success",
            devMessage: "created",
          });
        }
      }
    );
  } else {
    Responser({
      res,
      status: 503,
      body: null,
      message: "something-went-wrong",
      devMessage: "something-went-wrong",
    });
  }
};

const userLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const validUser = await User.findOne({ email });
  if (validUser) {
    if (validUser.password === password) {
      const token = jwt.sign({ _id: validUser._id }, process.env.APP_SECRET, {
        expiresIn: "7d",
      });
      Responser({
        res,
        status: 200,
        body: { user: validUser, token },
        message: "login-success",
        devMessage: "login via token",
      });
    } else {
      Responser({
        res,
        status: 404,
        body: null,
        message: "password-not-match",
        devMessage: "password-not-match",
      });
    }
  } else {
    Responser({
      res,
      status: 404,
      body: null,
      message: "email-not-found",
      devMessage: "email-not-found",
    });
  }
};

const UserController = {
  userRegister,
  userEmailActiviate,
  userLogin,
};

export default UserController;
