"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function AuthLink({ children, href }: { children: React.ReactNode; href: string }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsAuthenticated(!!token)
  }, [])

  const targetHref = isAuthenticated ? href : "/login"

  return <Link href={targetHref}>{children}</Link>
}