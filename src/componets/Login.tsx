import React from "react";
import Logo from "../shop.png";
import { useState } from "react";
import { useSignIn } from "react-auth-kit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

interface LoginForm {
  email: string;
  passwordHash: string;
}

interface SignInData {
  token: string;
  expiresIn: number;
  tokenType: string;
  authState: { email: string };
}

const Login: React.FC = () => {
  const [error, setError] = useState<string>("");
  const signIn = useSignIn();
  const Navigate = useNavigate();

  const OnSubmitHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    const form = event.target as HTMLFormElement;
    const emailInput = form.email as HTMLInputElement;
    const passwordInput = form.password as HTMLInputElement;
    
    const values: LoginForm = {
      email: emailInput.value,
      passwordHash: passwordInput.value,
    };
    axios
      .post("https://localhost:7137/api/Auth/SignIn", values)
      .then((response: AxiosResponse<{ token: string }>) => {
        const signInData: SignInData = {
          token: response.data.data,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { email: values.email },
        };
        
        signIn(signInData);
        Navigate("/products");
      })
      .catch((err) => {
        if (err && err instanceof AxiosError) {
          setError("error");
        } else if (err && err instanceof Error) {
          setError(err.message);
        }

        console.log("Error: ", err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-96 h-[100vh]">
      <a
        href="#"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black"
      >
        <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
        KOTON
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form
            onSubmit={OnSubmitHandle}
            className="space-y-4 md:space-y-6"
            action="#"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                onChange={(e) => {
                  e.target.value;
                }}
                type="text"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="your email ..."
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                onChange={(e) => {
                  e.target.value;
                }}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
