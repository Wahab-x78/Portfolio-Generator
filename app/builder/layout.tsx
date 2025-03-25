import type { ReactNode } from "react"
import { BuilderHeader } from "@/components/builder-header"

export default function BuilderLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <BuilderHeader />

      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>

      <footer className="bg-muted py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Portfolio Builder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

