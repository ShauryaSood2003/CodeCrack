"use client";

import { useState } from "react";
import { z } from "zod";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, HeartHandshake } from "lucide-react";

// Assuming these are your custom components
import { Input } from "../ui/input";

function UserSignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState<string[]>([]);
  const [trigger, setTrigger] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const User = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(20),
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    const parse = User.safeParse(user);

    if (!parse.success) {
      const errorMessages = parse.error.issues.map((item) => item.message);
      setErrors(errorMessages);
      setTrigger(true);
      setTimeout(() => {
        setTrigger(false);
        setErrors([]);
      }, 10000);
      return;
    }
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:4000/auth/signin",
        data: user,
        withCredentials: true,
      });
      console.log(response.data);

      localStorage.setItem("userInfo", JSON.stringify(response.data));
      console.log("Added cookie");

      navigate("/");
    } catch (e: any) {
      const message: string =
        e.response?.data?.message || "Server Down Try Again Later!";
      setErrors([message]);
      setTrigger(true);
      setTimeout(() => {
        setTrigger(false);
      }, 5000);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                <HeartHandshake className="h-8 w-8 text-primary" />
              </div>
              <p className="text-gray-500 mt-2">Sign in to your account</p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center">
                    <Mail className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    className="pl-10"
                  />
                  <div
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-pink-600 hover:text-pink-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <button onClick={handleClick}>Sign In</button>

              {trigger && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  {errors.map((errMsg, index) => (
                    <p className="text-red-700 text-sm" key={index}>
                      {errMsg}
                    </p>
                  ))}
                </div>
              )}

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-pink-600 hover:text-pink-500"
                  >
                    Register here
                  </Link>
                </p>
              </div>

              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073c0-6.627,5.373-12,12-12S24,5.445,24,12.073z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSignIn;
