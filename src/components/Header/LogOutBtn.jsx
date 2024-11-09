import React from "react";
import authservice from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/authSlice";

const LogOutBtn = () => {
  const dispath = useDispatch();
  const logOutHandler = () => {
    authservice.logOut().then(() => {
      dispath(logOut());
    });
  };
  return (
    <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
      Logout
    </button>
  );
};

export default LogOutBtn;
