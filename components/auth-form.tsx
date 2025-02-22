"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Common Schema for Email & Password
const commonSchema = {
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
};

// Login Schema
const loginSchema = z.object(commonSchema);

// Signup Schema with Extra Fields
const signupSchema = z
  .object({
    ...commonSchema,



    
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Define Types for Login and Signup Separately
type LoginFormData = z.infer<typeof loginSchema>;
type SignupFormData = z.infer<typeof signupSchema>;

interface AuthFormProps {
  type: "login" | "signup";
  userType: "company" | "freelancer";
  onSubmit: (data: LoginFormData | SignupFormData) => void;
}

export function AuthForm({ type, userType, onSubmit }: AuthFormProps) {
  const [error, setError] = useState<string | null>(null);

  // Select Schema Dynamically
  const schema = type === "login" ? loginSchema : signupSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData | LoginFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmitForm = (data: SignupFormData | LoginFormData) => {
    setError(null);
    onSubmit(data);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{type === "login" ? "Log In" : "Sign Up"}</CardTitle>
        <CardDescription>
          {type === "login"
            ? `Log in to your ${userType} account`
            : `Create a new ${userType} account`}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <CardContent className="space-y-4">
          {/* Name Field (Only for Signup) */}
          {type === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} />
              {/* {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>} */}
            </div>
          )}
          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>
          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...register("password")} />
            {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
          </div>
          {/* Confirm Password (Only for Signup) */}
          {type === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" {...register("confirmPassword")} />
              {/* {errors.confirmPassword && (
                <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
              )} */}
            </div>
          )}
          {/* Error Alert */}
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            {type === "login" ? "Log In" : "Sign Up"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
