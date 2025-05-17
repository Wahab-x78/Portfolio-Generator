"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, User, LogIn, LogOut, Settings, ChevronDown, Home, Palette, Code, Briefcase } from "lucide-react"
import jwt from "jsonwebtoken"

interface BuilderHeaderProps {
  isLoggedIn?: boolean
  userName?: string
}

export function BuilderHeader({ isLoggedIn: initialIsLoggedIn = false, userName: initialUserName = "" }: BuilderHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn)
  const [userName, setUserName] = useState(initialUserName)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      try {
        const decoded = jwt.decode(token) as { userId: string; name?: string }
        setIsLoggedIn(true)
        setUserName(decoded.name || "User") // Fallback to "User" if name is not in token
      } catch (error) {
        console.error("Invalid token:", error)
        setIsLoggedIn(false)
        setUserName("")
      }
    } else {
      setIsLoggedIn(false)
      setUserName("")
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    setUserName("")
    router.push("/login")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-8 mr-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-md"></div>
              <div className="absolute inset-0.5 bg-white dark:bg-gray-900 rounded-md flex items-center justify-center">
                <Code className="h-5 w-5 text-primary" />
              </div>
            </div>
            <span className="hidden md:inline-block font-bold text-xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Portfolio Builder
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 ml-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              href="/builder/info"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname.startsWith("/builder") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Builder
            </Link>
            <Link
              href="/templates"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/templates" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Templates
            </Link>
            <Link
              href="/examples"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/examples" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Examples
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <span className="hidden md:inline-block">{userName}</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Briefcase className="mr-2 h-4 w-4" />
                  <span>My Portfolios</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-1">
                  <LogIn className="h-4 w-4 mr-1" />
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  size="sm"
                  className="hidden md:inline-flex bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                >
                  Sign up
                </Button>
              </Link>
            </div>
          )}

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 py-4">
          <div className="container space-y-4">
            <Link
              href="/"
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
            <Link
              href="/builder/info"
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                pathname.startsWith("/builder") ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Code className="h-4 w-4 mr-2" />
              Builder
            </Link>
            <Link
              href="/templates"
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/templates" ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Palette className="h-4 w-4 mr-2" />
              Templates
            </Link>
            <Link
              href="/examples"
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/examples" ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Briefcase className="h-4 w-4 mr-2" />
              Examples
            </Link>

            {!isLoggedIn && (
              <div className="pt-4 border-t border-border/40 flex items-center gap-2">
                <Link href="/login" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    <LogIn className="h-4 w-4 mr-1" />
                    Log in
                  </Button>
                </Link>
                <Link href="/signup" className="flex-1">
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                  >
                    Sign up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}