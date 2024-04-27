import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${server}/user/login-user`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Login Success!");
        navigate("/");
        window.location.reload(true); 
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[url(data:image/jpeg;base64,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)] bg-cover">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-4 pb-4 text-center text-3xl font-extrabold text-gray-900">
              Login to your account
            </h2>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className={`${styles.noramlFlex} justify-between`}>
              <div className={`${styles.noramlFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href=".forgot-password"
                  className="font-medium text-[#49B9C8] hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-1px text-sm font-medium rounded-md text-[#49B9C8] bg-blue-600 hover:bg-[#49B9C8] hover:text-white"
              >
                Submit
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4>Not have any account?</h4>
              <Link to="/sign-up" className="text-[#49B9C8] hover:underline pl-2">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
