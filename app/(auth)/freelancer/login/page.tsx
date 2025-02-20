"use client"; // Add this to make the component interactive

import { AuthForm } from "@/components/auth-form"

export default function FreelancerLoginPage() {
  const handleSubmit = (data: any) => {
    // Handle freelancer login logic here
    console.log("Freelancer login:", data)
  }

  return <AuthForm type="login" userType="freelancer" onSubmit={handleSubmit} />
}

