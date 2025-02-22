"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut } from "@clerk/nextjs"; // Import Clerk components

const trustLevels = [
  {
    level: "Entry Trust",
    features: [
      "Basic identity verification",
      "Projects under $500",
      "Flexible milestones",
      "Full escrow protection",
      "Guided onboarding",
    ],
    applyLink: "/apply?level=entry",
  },
  {
    level: "Established Trust",
    features: [
      "Enhanced verification",
      "Projects up to $3,000",
      "Flexible milestones",
      "Basic work guarantee insurance",
      "Reduced fees for first project",
    ],
    applyLink: "/apply?level=established",
  },
  {
    level: "Premium Trust",
    features: [
      "Full background checks",
      "Unlimited project values",
      "Priority dispute resolution",
      "Comprehensive insurance",
    ],
    applyLink: "/checkout?level=premium",
  },
];

export default function TrustLevels() {
  const router = useRouter();

  return (
    <section id="trust-levels" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Trust Levels System</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {trustLevels.map((level, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {level.level}
                  <Badge variant={index === 2 ? "default" : "secondary"}>
                    Level {index + 1}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-inside list-disc space-y-2 mb-4">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>

                {/* Show buttons only if user is signed in */}
                <SignedIn>
                  <Button
                    onClick={() => router.push(level.applyLink)}
                    className="w-full"
                    variant={index === 2 ? "destructive" : "default"}
                  >
                    {index === 2 ? "Upgrade & Pay" : "Apply Now"}
                  </Button>
                </SignedIn>

                {/* Show message if user is signed out */}
                <SignedOut>
                  <div className="text-center text-sm text-muted-foreground">
                    Please sign in to apply.
                  </div>
                </SignedOut>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}