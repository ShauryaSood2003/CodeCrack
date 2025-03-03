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
import {
  Shield,
  Mail,
  User,
  Lock,
  AlertCircle,
  Loader2,
  Key,
} from "lucide-react";

function AdminSignUp() {
  const [user, setUser] = useState({
    email: "",
    fname: "",
    lname: "",
    password: "",
    code: "",
  });

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [trigger, setTrigger] = useState(false);

  const navigate = useNavigate();

  const UserSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    fname: z.string().min(1, { message: "First name is required" }),
    lname: z.string().min(1, { message: "Last name is required" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .max(20, { message: "Password cannot exceed 20 characters" }),
    code: z
      .string()
      .min(1, { message: "Admin code is required" })
      .max(10, { message: "Code cannot exceed 10 characters" }),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    if (!acceptTerms) {
      setErrors(["Please accept the terms and conditions"]);
      setTrigger(true);
      setTimeout(() => {
        setTrigger(false);
        setErrors([]);
      }, 5000);
      return;
    }

    const parse = UserSchema.safeParse(user);

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
        url: "http://localhost:4000/auth/admin/signup",
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
          <CardTitle className="text-2xl font-bold">Admin Sign Up</CardTitle>
          <CardDescription>
            Create your admin account to access the dashboard
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

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fname">First Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="fname"
                    type="text"
                    name="fname"
                    placeholder="John"
                    value={user.fname}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lname">Last Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="lname"
                    type="text"
                    name="lname"
                    placeholder="Doe"
                    value={user.lname}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
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

            <div className="space-y-2">
              <Label htmlFor="code">Admin Code</Label>
              <div className="relative">
                <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="code"
                  type="password"
                  name="code"
                  placeholder="Enter admin code"
                  value={user.code}
                  onChange={handleChange}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={acceptTerms}
              onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
            />
            <Label
              htmlFor="terms"
              className="text-sm font-normal cursor-pointer"
            >
              I accept the{" "}
              <Link to="/terms" className="text-primary hover:underline">
                terms and conditions
              </Link>
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
                Creating account...
              </>
            ) : (
              "Sign Up"
            )}
          </Button>

          <p className="text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/admin/signin"
              className="text-primary font-medium hover:underline"
            >
              Sign in here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default AdminSignUp;
