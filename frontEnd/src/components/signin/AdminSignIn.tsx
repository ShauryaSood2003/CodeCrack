"use client";

import type React from "react";

import { useState } from "react";
import { z } from "zod";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Mail, Lock, AlertCircle, Loader2 } from "lucide-react";

function AdminSignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [trigger, setTrigger] = useState(false);

  const navigate = useNavigate();

  const User = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must not exceed 20 characters"),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    setIsLoading(true);

    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:4000/auth/admin/signin",
        data: user,
        withCredentials: true,
      });

      localStorage.setItem("userInfo", JSON.stringify(response.data));
      navigate("/");
    } catch (e: any) {
      const message: string =
        e.response?.data?.message || "Server Down. Please try again later!";
      setErrors([message]);
      setTrigger(true);
      setTimeout(() => {
        setTrigger(false);
        setErrors([]);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Card className="w-full max-w-md shadow-lg border-0 shadow-slate-200">
        <CardHeader className="space-y-2 text-center pb-6">
          <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-2">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Admin Portal</CardTitle>
          <CardDescription>
            Sign in to your admin account to access the dashboard
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="admin@company.com"
                  value={user.email}
                  onChange={handleChange}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/admin/forgot-password"
                  className="text-xs text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={user.password}
                  onChange={handleChange}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            />
            <Label
              htmlFor="remember"
              className="text-sm font-normal cursor-pointer"
            >
              Remember me for 30 days
            </Label>
          </div>

          {trigger && errors.length > 0 && (
            <Alert
              variant="destructive"
              className="border-red-500/50 bg-red-500/10"
            >
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="ml-2">
                {errors.map((errMsg, index) => (
                  <p key={index}>{errMsg}</p>
                ))}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <Button onClick={handleClick} className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </Button>

          <p className="text-sm text-center text-muted-foreground">
            Don't have an account?{" "}
            <Link
              to="/admin/signup"
              className="text-primary font-medium hover:underline"
            >
              Register here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default AdminSignIn;
