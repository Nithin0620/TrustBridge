"use client";
import { useState } from "react";
import Link from "next/link";
import Chatbot from "./Chat-Bot"; // ✅ Import Chatbot component

export default function Footer() {
  const [showChat, setShowChat] = useState(false);

  return (
    <footer className="border-t relative">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">TrustBridge</h3>
            <p className="text-sm text-muted-foreground">
              Building trust between freelancers and companies through secure, transparent collaboration.
            </p>
          </div>
         
        </div>

       
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TrustBridge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
