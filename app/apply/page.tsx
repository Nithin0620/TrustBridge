"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export default function ApplyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const trustLevelParam = searchParams.get("level") || "Entry Trust";

  const trustLevels = {
    entry: "Entry Trust",
    established: "Established Trust",
    premium: "Premium Trust",
  };
  
  const trustLevel = trustLevels[trustLevelParam.toLowerCase()] || "Entry Trust";

  const trustDocuments: { [key: string]: string[] } = {
    "Entry Trust": ["Aadhaar Card", "PAN Card"],
    "Established Trust": ["Aadhaar Card", "PAN Card", "Your Address", "Neighbor’s Address"],
    "Premium Trust": ["Aadhaar Card", "PAN Card", "Your Address", "Neighbor’s Address", "Income Proof", "Bank Statement"],
  };

  const documents = trustDocuments[trustLevel] || [];

  // Step Control for Premium Trust Only
  const [step, setStep] = useState(1);

  // Form state
  const [formData, setFormData] = useState({ name: "", email: "" });

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission for Premium Trust
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (trustLevel === "Premium Trust") {
      setStep(2); // Only move to payment for Premium Trust
    } else {
      alert(`Application submitted for ${trustLevel}!`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-lg p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Apply for {trustLevel}</CardTitle>
        </CardHeader>

        <CardContent>
          {/* Step 1: Show Form */}
          {step === 1 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label className="text-sm font-semibold">Name</Label>
                <Input name="name" value={formData.name} onChange={handleInputChange} required />
              </div>

              <div>
                <Label className="text-sm font-semibold">Email</Label>
                <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </div>

              {/* Document Upload Section */}
              {documents.length > 0 && (
                <div>
                  <Label className="font-semibold">Upload Verification Documents</Label>
                  {documents.map((doc, index) => (
                    <div key={index} className="mt-2">
                      <Label className="text-sm font-medium">{doc}</Label>
                      <Input type="file" accept="image/*,application/pdf" required />
                    </div>
                  ))}
                </div>
              )}

              {/* Submit Button (Changes for Premium Trust) */}
              <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                {trustLevel === "Premium Trust" ? "Proceed to Payment" : "Submit Application"}
              </Button>
            </form>
          )}

          {/* Step 2: Payment Page for Premium Trust */}
          {step === 2 && trustLevel === "Premium Trust" && (
            <div className="text-center">
              <p className="text-lg font-semibold mb-4">Complete your payment to finalize the application</p>
              <Button onClick={() => router.push("/checkout")} className="w-full bg-red-600 text-white hover:bg-red-700">
                Make Payment
              </Button>
            </div>
          )}
        </CardContent>

        <CardFooter className="text-center">
          <Link href="/" className="text-blue-600 hover:underline text-sm font-medium transition duration-300 hover:text-blue-800">
            ← Back to Trust Levels
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
