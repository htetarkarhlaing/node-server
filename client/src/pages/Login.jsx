/* eslint-disable react-hooks/exhaustive-deps */
import { LockClosedIcon, MailIcon } from "@heroicons/react/solid";
import React from "react";
import { Button, TextField } from "../components/form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter the valid mail address.")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(30, "Password must be less than 30 characters"),
});

const Login = () => {
  //instances
  const URL = process.env.REACT_APP_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleOnSubmit = async (data) => {
    await fetch(`${URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((response) => response.json())
      .then((resJson) => {
        if (resJson.meta.success) {
          window.alert(resJson.meta.message);
        } else {
          window.alert(resJson.meta.message);
        }
      })
      .catch((err) => {
        console.log(err);
        window.alert("err");
      });
  };

  return (
    <div
      className="h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/neon-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-96 backdrop-blur-sm border border-white border-opacity-10 shadow-md bg-white bg-opacity-10 flex flex-col items-center p-10 rounded-lg">
        <h1 className="font-semibold text-white text-2xl mb-4">Login</h1>

        <form className="w-full" onSubmit={handleSubmit(handleOnSubmit)}>
          <TextField
            register={register("email")}
            type="text"
            placeholder="email"
            name="email"
            error={errors.email}
            icon={
              <MailIcon className="w-4 h-4 text-gray-200 absolute top-3 left-2" />
            }
          />

          <TextField
            register={register("password")}
            type="password"
            placeholder="password"
            name="password"
            error={errors.password}
            icon={
              <LockClosedIcon className="w-4 h-4 text-gray-200 absolute top-3 left-2" />
            }
          />

          <Button>Login</Button>
        </form>
        <div className="text-center mt-5">
          <p className="text-sm text-gray-500">New to our website?</p>
          <div>
            <Link to="/register" className="text-blue-500 text-sm">
              Create your new account here!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
