import { AuthForm } from "@/components/auth-form"

export default function CompanyLoginPage() {
  const handleSubmit = (data: any) => {
    // Handle company login logic here
    console.log("Company login:", data)
  }

  return <AuthForm type="login" userType="company" onSubmit={handleSubmit} />
}

