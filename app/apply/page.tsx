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

  // Normalize trust level to match object keys
  const trustLevels = {
    entry: "Entry Trust",
    established: "Established Trust",
    premium: "Premium Trust",
  };
  
  const trustLevel = trustLevels[trustLevelParam.toLowerCase()] || "Entry Trust";

  // Define required documents based on trust level
  const trustDocuments: { [key: string]: string[] } = {
    "Entry Trust": ["Aadhaar Card", "PAN Card"],
    "Established Trust": ["Aadhaar Card", "PAN Card", "Your Address", "Neighbor’s Address"],
    "Premium Trust": ["Aadhaar Card", "PAN Card", "Your Address", "Neighbor’s Address", "Income Proof", "Bank Statement"],
  };

  const documents = trustDocuments[trustLevel] || [];

  // Debugging logs
  console.log("URL Trust Level:", trustLevelParam);
  console.log("Mapped Trust Level:", trustLevel);
  console.log("Required Documents:", documents);

  // Form state
  const [formData, setFormData] = useState({ name: "", email: "", address: "", neighborAddress: "", incomeProof: "", bankStatement: "" });
  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: File | null }>({});
  const [uploadPreview, setUploadPreview] = useState<{ [key: string]: string }>({}); // Store preview URLs

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, docType: string) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setUploadedFiles((prev) => ({
        ...prev,
        [docType]: file,
      }));

      // Generate preview URL for images (only if it's an image)
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            setUploadPreview((prev) => ({
              ...prev,
              [docType]: event.target.result as string,
            }));
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  // Handle form submission (Redirect for Premium Trust)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (trustLevel === "Premium Trust") {
      router.push("/checkout"); // Redirect to payment page
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
          <form onSubmit={handleSubmit} className="space-y-4">


            {/* Name Field */}
            <div>
              <Label className="text-sm font-semibold">Name</Label>
              <Input name="name" value={formData.name} onChange={handleInputChange} required />
            </div>

            {/* Email Field */}
            <div>
              <Label className="text-sm font-semibold">Email</Label>
              <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>

            {/* Address Fields for "Established Trust" and "Premium Trust" */}
            {(trustLevel === "Established Trust" || trustLevel === "Premium Trust") && (
              <>
                <div>
                  <Label className="text-sm font-semibold">Your Address</Label>
                  <Input name="address" value={formData.address} onChange={handleInputChange} required />
                </div>
                <div>
                  <Label className="text-sm font-semibold">Neighbor’s Address</Label>
                  <Input name="neighborAddress" value={formData.neighborAddress} onChange={handleInputChange} required />
                </div>
              </>
            )}

            {/* Additional Fields for Premium Trust */}
            {trustLevel === "Premium Trust" && (
              <>
                <div>
                  <Label className="text-sm font-semibold">Income Proof</Label>
                  <Input name="incomeProof" value={formData.incomeProof} onChange={handleInputChange} required />
                </div>
                <div>
                  <Label className="text-sm font-semibold">Bank Statement</Label>
                  <Input name="bankStatement" value={formData.bankStatement} onChange={handleInputChange} required />
                </div>
              </>
            )}

            {/* Dynamic Document Upload Fields */}
            {documents.length > 0 ? (
              <div className="space-y-3">
                <Label className="font-semibold">Upload Verification Documents</Label>
                {documents.map((doc, index) => (
                  <div key={index}>
                    <Label htmlFor={`file-${doc}`} className="block text-sm font-medium text-gray-700">
                      {doc}
                    </Label>
                    <Input id={`file-${doc}`} type="file" accept="image/*,application/pdf" onChange={(e) => handleFileChange(e, doc)} required />
                    {/* Preview uploaded images */}
                    {uploadPreview[doc] && (
                      <img src={uploadPreview[doc]} alt={`${doc} preview`} className="mt-2 w-24 h-24 object-cover border rounded" />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-red-500">Error: Trust Level documents not found.</p>
            )}

            {/* Show payment button only for Premium Trust */}
            {trustLevel === "Premium Trust" ? (
                
              <Button type="submit" className="w-full bg-red-600 text-white hover:bg-red-700">
                Make Payment
              </Button>
            ) : (
              <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                Submit Application
              </Button>
            )}
          </form>
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
