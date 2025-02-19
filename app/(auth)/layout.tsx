import type React from "react"
import Link from "next/link"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            TrustBridge
          </Link>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center bg-muted">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  )
}

