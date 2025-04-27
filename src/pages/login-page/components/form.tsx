"use client";

import { Formik, Form, Field, FormikProps } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/redux/hooks";

import sign  from "jwt-encode";
import { setCookie } from "cookies-next";

import { onLogin } from "@/lib/redux/features/authSlice";

import LoginSchema from "./schema";
import ILogin from "./type";

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const initialValues: ILogin = {
    email: "",
    password: "",
  };

  const login = async (values: ILogin) => {
    try {
      const { data } = await axios.get(
        `http://localhost:7001/user?email=${values.email}&password=${values.password}`
      );

      if (data.length === 0) throw new Error("Email atau Password salah");

      const stateUser = {
        user: {
          email: data[0].email,
          first_name: data[0].first_name,
          last_name: data[0].last_name,
        },
        isLogin: true,
      };

      const token = sign(stateUser, "test");

      setCookie("access_token", token);
      dispatch(onLogin(stateUser));

      alert("Login Success");
      router.push("/");
    } catch (err) {
      alert((err as any).message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 top-0 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values, { resetForm }) => {
          login(values);
          resetForm();
        }}
      >
        {(props: FormikProps<ILogin>) => {
          const { values, handleChange, touched, errors } = props;

          return (
            <Form className="flex flex-col gap-6">
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium">Email:</label>
                <Field
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {touched.email && errors.email ? (
                  <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                ) : null}
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium">Password:</label>
                <Field
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {touched.password && errors.password ? (
                  <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                ) : null}
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 font-medium"
              >
                Login
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
