/* eslint-disable react-hooks/exhaustive-deps */
import {
  LockClosedIcon,
  MailIcon,
  UserIcon,
  IdentificationIcon,
} from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
import { Button, Select, TextField } from "../components/form";
import { Link } from "react-router-dom";
import { capitalCase } from "change-case";

const Register = () => {
  //instances
  const URL = process.env.REACT_APP_URL;
  const fetchOption = {
    mehtod: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  const [roleList, setRoleList] = useState([]);
  const [form, setFrom] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: 0,
  });

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

  const onChangeHandler = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = () => {
    fetch(`${URL}/api/auth/register`, {
      mehtod: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: {
        username: form.username,
        email: form.email,
        password: form.password,
        role: form.role,
      },
    })
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

  useEffect(() => {
    roleFetcher();
  }, []);

  return (
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

        <TextField
          type="text"
          placeholder="username"
          name="username"
          value={form.username}
          onChange={onChangeHandler}
          icon={
            <UserIcon className="w-4 h-4 text-gray-200 absolute top-3 left-2" />
          }
        />

        <TextField
          type="email"
          placeholder="email"
          name="email"
          value={form.email}
          onChange={onChangeHandler}
          icon={
            <MailIcon className="w-4 h-4 text-gray-200 absolute top-3 left-2" />
          }
        />

        <TextField
          type="password"
          placeholder="password"
          name="password"
          value={form.password}
          onChange={onChangeHandler}
          icon={
            <LockClosedIcon className="w-4 h-4 text-gray-200 absolute top-3 left-2" />
          }
        />
        <TextField
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={onChangeHandler}
          icon={
            <LockClosedIcon className="w-4 h-4 text-gray-200 absolute top-3 left-2" />
          }
        />

        <Select
          icon={
            <IdentificationIcon className="w-4 h-4 text-gray-200 absolute top-3 left-2" />
          }
          name="role"
          value={form.role}
          onChange={onChangeHandler}
        >
          {roleList.map((role, key) => (
            <option key={key} value={role._id}>
              {capitalCase(role.role)}
            </option>
          ))}
        </Select>

        <Button onClick={handleOnSubmit}>Register</Button>

        <div className="text-center mt-5">
          <p className="text-sm text-gray-500">Already have an account?</p>
          <div>
            <Link href="/login" className="text-blue-500 text-sm">
              Sign In from here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
