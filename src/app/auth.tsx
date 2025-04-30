"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/lib/redux/hooks";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";

import { onLogin } from "@/lib/redux/features/authSlice";
import React from "react";

import { IAuth } from "@/lib/redux/features/authSlice";
import { string } from "yup";

export default function Auth({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  const refreshLogin = async () => {
    const access_token = (await getCookie("access_token")) || "";

    if (access_token) {
      const auth: IAuth = await jwtDecode(access_token);

      console.log(auth)

      dispatch(onLogin({
        user: {
          email: "",
          first_name: "",
          last_name: "",
          role: ""
        }, isLogin :true
      }));
    }
  };

  useEffect(() => {
    refreshLogin();
  });

  return <div>{children}</div>;
}
