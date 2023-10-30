import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button className="inline-bock py-2 duration-200 hover:bg-white rounded-full md:px-6 md:text-base xs:px-2 xs:text-sm"
    onClick={logoutHandler}>
      LogOut
    </button>
  );
};

export default LogoutBtn;
