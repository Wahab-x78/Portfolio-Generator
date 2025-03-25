import { AuthLink } from "@/components/AuthLink"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, User } from "lucide-react"

export default function Home() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("theme");
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 z-0" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] bg-cover bg-center opacity-10 z-0" />

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Build Your Professional Portfolio in Minutes
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-muted-foreground">
              Create a stunning portfolio website without coding. Fill in your details, choose a template, and get a
              ready-to-deploy portfolio.
            </p>
            <AuthLink href="/builder/info">
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 shadow-lg hover:shadow-primary/25"
              >
                Start Building <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </AuthLink>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </header>

      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:border-primary/50">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <User className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Enter Your Info</h3>
              <p className="text-muted-foreground">
                Fill out a simple form with your details, projects, skills, education, and experience.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:border-primary/50">
              <div className="bg-purple-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Palette className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Choose a Template</h3>
              <p className="text-muted-foreground">
                Select from professionally designed templates that showcase your work beautifully.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:border-primary/50">
              <div className="bg-indigo-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Get Your Portfolio</h3>
              <p className="text-muted-foreground">
                Preview your portfolio and download the Next.js code ready for deployment.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-2xl p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Modern Portfolio Templates</h2>
                <p className="text-muted-foreground mb-6">
                  Our templates are designed by professionals to make your portfolio stand out. They're responsive,
                  fast, and built with modern technologies.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Built with Next.js and Tailwind CSS
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fully responsive for all devices
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SEO optimized to help you get discovered
                  </li>
                </ul>
                <AuthLink href="/builder/info">
                  <Button className="rounded-full">
                    Start Building Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </AuthLink>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-xl opacity-30 blur-xl" />
                <div className="relative bg-card rounded-xl overflow-hidden shadow-xl border border-border/50">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Portfolio template preview"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Create Your Portfolio?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have built their online presence with our portfolio builder.
            </p>
            <AuthLink href="/builder/info">
              <Button size="lg" className="rounded-full px-8">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </AuthLink>
          </div>
        </div>
      </main>

      <footer className="bg-muted/30 border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Portfolio Builder
                </h3>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Templates
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Examples
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Portfolio Builder. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

