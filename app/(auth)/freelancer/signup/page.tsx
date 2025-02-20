"use client";

import { AuthForm } from "@/components/auth-form";

export default function Page() {
  // Use the correct type for the function parameter
  const handleSubmit = (data: { 
    email: string; 
    password: string; 
    name?: string; 
    confirmPassword?: string; 
  }) => {
    console.log("Form submitted:", data);
  };

  return <AuthForm type="signup" userType="freelancer" onSubmit={handleSubmit} />;
}
