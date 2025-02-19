import { AuthForm } from "@/components/auth-form"

export default function FreelancerSignupPage() {
  const handleSubmit = (data: any) => {
    // Handle freelancer signup logic here
    console.log("Freelancer signup:", data)
  }

  return <AuthForm type="signup" userType="freelancer" onSubmit={handleSubmit} />
}

