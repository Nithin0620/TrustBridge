import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header"; // Ensure single import
import "./globals.css";

export const metadata: Metadata = {
  title: "TrustBridge",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* <Header /> Ensure this is the only place Header is included */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
