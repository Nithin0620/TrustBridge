"use client"; // Add this to make the component interactive

import { AuthForm } from "@/components/auth-form"

export default function CompanyLoginPage() {
  const handleSubmit = (data: any) => {
    // Handle company login logic herenp,
    console.log("Company login:", data)
  }

  return <AuthForm type="login" userType="company" onSubmit={handleSubmit} />
}

