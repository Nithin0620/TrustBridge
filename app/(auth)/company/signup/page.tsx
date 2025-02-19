import { AuthForm } from "@/components/auth-form"

export default function CompanySignupPage() {
  const handleSubmit = (data: any) => {
    // Handle company signup logic here
    console.log("Company signup:", data)
  }

  return <AuthForm type="signup" userType="company" onSubmit={handleSubmit} />
}

