import React from 'react';
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
    requiredProjects: 5,
    upgradeRequirement: "Complete 5 verified projects to unlock Established Trust",
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
    requiredProjects: 15,
    upgradeRequirement: "Complete 15 verified projects to unlock Premium Trust",
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
    requiredProjects: null,
    upgradeRequirement: "Highest level achieved",
    applyLink: "/checkout?level=premium",
  },
];

const TrustLevels = () => {
  // This would come from your backend/state management
  const completedProjects = 7; // Example: user has completed 7 projects
  const currentLevel = 0; // Example: user is at Entry Trust level (0-based index)
  
  const handleApply = (link) => {
    console.log('Navigate to:', link);
  };
  
  const renderButton = (level, index) => {
    // If it's the current level or below, don't show upgrade button
    if (index <= currentLevel) {
      return (
        <Button className="w-full" variant="outline" disabled>
          Current Level
        </Button>
      );
    }
    
    // If it's the next level up
    if (index === currentLevel + 1) {
      // If they've completed enough projects
      if (completedProjects >= level.requiredProjects) {
        return (
          <Button
            onClick={() => handleApply(level.applyLink)}
            className="w-full"
            variant="default"
          >
            Apply Now
          </Button>
        );
      }
      // If they haven't completed enough projects
      return (
        <Button className="w-full" variant="outline" disabled>
          {completedProjects} / {level.requiredProjects} Projects Completed
        </Button>
      );
    }
    
    // For levels more than one step up
    return (
      <Button className="w-full" variant="outline" disabled>
        Complete Previous Level First
      </Button>
    );
  };

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

                <div className="mt-4 pt-4 border-t border-muted-foreground/20">
                  <p className="text-sm text-muted-foreground mb-4">
                    {level.upgradeRequirement}
                  </p>
                  {renderButton(level, index)}
                </div>


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

};

export default TrustLevels;

}

