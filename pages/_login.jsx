import React, { useRouter } from "next/router";
import { signIn } from "../services/auth";
import { toast } from "react-toastify";
import { useState } from "react";
import { setCookie } from "nookies";

export default function SignInSide() {
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await signIn(
        userData.username,
        userData.password.toString()
      );
      if (result) {
        setCookie(null, "jwt", result.jwt, {
          secure: false,
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        toast.success("login successful");
        router.push("/");
        return;
      } else {
        toast.error("Invalid details");
      }
    } catch (err) {
      console.log(err);
      // toast.error(`${err?.response?.data?.error?.message}`);
    }
  };

  return (
    <div
      style={{
        paddingTop: "50px",
      }}
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={(e) => handleChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="2016/235793/okaforchinedvictor"
                  required
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
                  type="password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full  text-white bg-green-700 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login in
              </button>
              <p
                style={{ pointer: "cursor" }}
                onClick={() => router.push("_signup")}
                className="text-sm font-light text-gray-500 dark:text-gray-400"
              >
                Create have an account?{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
