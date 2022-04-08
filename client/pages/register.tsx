/* eslint-disable react-hooks/exhaustive-deps */
import {
  LockClosedIcon,
  MailIcon,
  UserIcon,
  IdentificationIcon,
} from "@heroicons/react/solid";
import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { Button, Select, TextField } from "../components/form";
import { capitalCase } from "change-case";
import Link from "next/link";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { Main } from "../layouts";

const loginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Please enter the valid mail address.")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(30, "Password must be less than 30 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  role: yup.string().required("Please select a role"),
});

const Register: NextPage = () => {
  //instances
  const URL = process.env.NEXT_PUBLIC_URL;
  const dispatch = useDispatch();
  const fetchOption = {
    mehtod: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  //state
  const [roleList, setRoleList] = useState([]);
  const [isSubmitting, setSubmitting] = useState(false);

  //methods
  const roleFetcher = () => {
    setRoleList([]);
    fetch(`${URL}/api/auth/roles`, fetchOption)
      .then((response) => response.json())
      .then((resJson) => {
        if (resJson.meta.success) {
          setRoleList(resJson.data.role);
        } else {
          setRoleList([]);
        }
      })
      .catch((err) => {
        console.log(err);
        setRoleList([]);
      });
  };

  const handleOnSubmit = async (data: any) => {
    setSubmitting(true);
    await fetch(`${URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
        role: data.role,
      }),
    })
      .then((response) => response.json())
      .then((resJson) => {
        if (resJson.meta.success) {
          dispatch({
            type: "OPEN_NOTIFICATION",
            payloads: {
              title: "Login Success!",
              body: "You have successfully logged in.",
              //   icon: <CheckCircleIcon className="w-6 h-6 mr-4" />,
            },
          });
          setSubmitting(false);
        } else {
          dispatch({
            type: "OPEN_NOTIFICATION",
            payloads: {
              title: "Login Failed!",
              body: "Please check your email and password.",
              //   icon: <ExclamationCircleIcon className="w-6 h-6 mr-4" />,
            },
          });
          setSubmitting(false);
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "OPEN_NOTIFICATION",
          payloads: {
            title: "Login Failed!",
            body: "Something went wrong in your side.",
            // icon: <InformationCircleIcon className="w-6 h-6 mr-4" />,
          },
        });
        setSubmitting(false);
      });
  };

  useEffect(() => {
    roleFetcher();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      role: "",
    },
  });

  return (
    <Main SEO={{ title: "Login" }}>
      <div
        className="h-screen w-full flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/neon-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-auto w-96 backdrop-blur-sm border border-white border-opacity-10 shadow-md bg-white bg-opacity-10 flex flex-col items-center p-10 rounded-lg">
          <h1 className="font-semibold text-white text-2xl mb-4">Sign Up</h1>
          <form className="w-full" onSubmit={handleSubmit(handleOnSubmit)}>
            <TextField
              register={register("username")}
              type="text"
              placeholder="username"
              name="username"
              icon={
                <UserIcon className="w-4 h-4 text-gray-200 absolute top-3 left-2" />
              }
              error={errors.username}
            />

            <TextField
              register={register("email")}
              type="email"
              placeholder="email"
              name="email"
              icon={
                <MailIcon className="w-4 h-4 text-gray-200 absolute top-3 left-2" />
              }
              error={errors.email}
            />

            <TextField
              register={register("password")}
              type="password"
              placeholder="password"
              name="password"
              icon={
                <LockClosedIcon className="w-4 h-4 text-gray-200 absolute top-3 left-2" />
              }
              error={errors.password}
            />
            <TextField
              register={register("confirmPassword")}
              type="password"
              placeholder="confirm password"
              name="confirmPassword"
              icon={
                <LockClosedIcon className="w-4 h-4 text-gray-200 absolute top-3 left-2" />
              }
              error={errors.confirmPassword}
            />

            <Select
              icon={
                <IdentificationIcon className="w-4 h-4 text-gray-200 absolute top-3 left-2" />
              }
              name="role"
              register={register("role")}
              error={errors.role}
            >
              <option value="">-- Select Role --</option>
              {roleList.map((role: any, key) => (
                <option key={key} value={role._id}>
                  {capitalCase(role.role)}
                </option>
              ))}
            </Select>

            <Button disabled={isSubmitting}>Register</Button>
          </form>

          <div className="text-center mt-5">
            <p className="text-sm text-gray-500">Already have an account?</p>
            <div>
              <Link href="/login" passHref>
                <span className="text-blue-500 text-sm cursor-pointer">Sign In from here</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Register;
