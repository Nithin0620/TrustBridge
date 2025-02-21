"use client";
import { Button } from "@/components/ui/button";
import { SignUpButton, SignedOut } from "@clerk/nextjs";

export default function CallToAction() {
  return (
    <SignedOut> {/* Hide CTA when user is signed in */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Build Trust in Your Remote Work?
          </h2>
          <p className="mb-8 text-xl">
            Join TrustBridge today and experience secure, transparent collaboration.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild size="lg" variant="secondary">
              <SignUpButton mode="modal" />
            </Button>
          </div>
        </div>
      </section>
    </SignedOut>
  );
}
