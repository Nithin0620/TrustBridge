import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Briefcase, UserCheck } from "lucide-react"

export default function GettingStartedPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold">Getting Started with TrustBridge</h1>
      <p className="mb-12 text-center text-xl text-muted-foreground">
        Follow these simple steps to start your journey with TrustBridge, whether you're a freelancer or a company.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <UserCheck className="mr-2 h-6 w-6" />
              For Freelancers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal space-y-4 pl-5">
              <li>Sign up for a freelancer account</li>
              <li>Complete your profile and showcase your skills</li>
              <li>Verify your identity to increase your trust level</li>
              <li>Browse available projects and submit proposals</li>
              <li>Collaborate with clients through our secure platform</li>
              <li>Receive payments through our escrow system</li>
            </ol>
            <Button asChild className="mt-6">
              <Link href="/freelancer/signup">
                Get Started as a Freelancer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Briefcase className="mr-2 h-6 w-6" />
              For Companies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal space-y-4 pl-5">
              <li>Create a company account</li>
              <li>Verify your business to build trust with freelancers</li>
              <li>Post your project with clear requirements</li>
              <li>Review proposals and select the best freelancer</li>
              <li>Manage projects with milestone-based payments</li>
              <li>Provide feedback and build long-term relationships</li>
            </ol>
            <Button asChild className="mt-6">
              <Link href="/company/signup">
                Get Started as a Company
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

