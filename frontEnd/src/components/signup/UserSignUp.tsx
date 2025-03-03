import { useState } from "react";
import { z } from "zod";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { Mail, Lock, Eye, EyeOff, User2 } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function UserSignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    fname: "",
    lname: "",
    password: "",
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [trigger, setTrigger] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const User = z.object({
    email: z.string().email(),
    fname: z.string().min(1, { message: "First Name cannot be Empty" }),
    lname: z.string(),
    password: z.string().min(8).max(20),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
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
        url: "http://localhost:4000/auth/signup",
        data: user,
        withCredentials: true,
      });
      localStorage.setItem("userInfo", response.data);
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

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="p-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Join us today and get started
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center">
                    <Mail className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    type="email"
                    placeholder="m@example.com"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    First name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center">
                      <User2 className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      type="text"
                      placeholder="John"
                      name="fname"
                      value={user.fname}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Last name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center">
                      <User2 className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Doe"
                      name="lname"
                      value={user.lname}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    className="pl-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  Must be at least 8 characters long
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="terms" className="text-sm text-gray-500">
                  I agree to the{" "}
                  <Link to="#" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="#" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button onClick={handleClick}>Create Account</Button>

              {trigger && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        There were errors with your submission
                      </h3>
                      <div className="mt-2 text-sm text-red-700">
                        <ul className="list-disc space-y-1 pl-5">
                          {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <GoogleLogin
                  onSuccess={async (res) => {
                    const decoded = res.credential;
                    console.log(decoded);
                  }}
                  onError={() => {
                    console.log("Error occurred while Google signin!");
                  }}
                  type="standard"
                  size="large"
                  shape="rectangular"
                  logo_alignment="center"
                  width="320"
                />
              </div>

              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="font-medium text-primary hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSignUp;
