"use client"

import { useEffect, useRef } from "react"
import { AuthLink } from "@/components/AuthLink"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, User } from "lucide-react"
import { gsap } from "gsap"

export default function Home() {
  const headerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<HTMLDivElement[]>([])
  const templateRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const footerLinksRef = useRef<HTMLAnchorElement[]>([])

  useEffect(() => {
    // Header animations
    const headerH1 = headerRef.current?.querySelector("h1")
    if (headerH1) {
      gsap.fromTo(
        headerH1,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
    }
    const headerP = headerRef.current?.querySelector("p")
    if (headerP) {
      gsap.fromTo(
        headerP,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
      )
    }
    const headerButton = headerRef.current?.querySelector("button")
    if (headerButton) {
      gsap.fromTo(
        headerButton,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.4, ease: "back.out(1.7)" }
      )
    }

    // How It Works cards animation
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2 * index,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      )
    })

    // Template section animation
    if (templateRef.current?.children) {
      gsap.fromTo(
        templateRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: templateRef.current,
            start: "top 85%",
          },
        }
      )
    }

    // CTA section animation
    if (ctaRef.current?.children) {
      gsap.fromTo(
        Array.from(ctaRef.current.children),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
          },
        }
      )
    }

    // Footer links hover animation
    footerLinksRef.current.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, { y: -3, color: "#ffffff", duration: 0.3, ease: "power2.out" })
      })
      link.addEventListener("mouseleave", () => {
        gsap.to(link, { y: 0, color: "#6b7280", duration: 0.3, ease: "power2.out" })
      })
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <style jsx>{`
        .gradient-wave {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
          z-index: 0;
          animation: wave 8s ease-in-out infinite;
        }
        @keyframes wave {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
        .card-hover:hover {
          transform: scale(1.05) translateY(-5px);
        }
        .image-tilt:hover {
          transform: perspective(1000px) rotateY(5deg) rotateX(5deg);
        }
        .glow-button {
          position: relative;
          overflow: hidden;
        }
        .glow-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: 0.5s;
        }
        .glow-button:hover::before {
          left: 100%;
        }
        .underline-hover {
          position: relative;
        }
        .underline-hover::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: #ffffff;
          transition: width 0.3s ease;
        }
        .underline-hover:hover::after {
          width: 100%;
        }
      `}</style>

      <header className="relative overflow-hidden">
        <div className="gradient-wave" />
        <div ref={headerRef} className="container mx-auto px-6 py-24 md:py-40 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent tracking-tight">
              Build Your Professional Portfolio in Minutes
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Create a stunning portfolio website without coding. Fill in your details, choose a template, and launch your online presence.
            </p>
            <AuthLink href="/builder/info">
              <Button
                size="lg"
                className="glow-button text-lg px-10 py-6 rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 shadow-xl hover:shadow-primary/30"
              >
                Start Building <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </AuthLink>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </header>

      <main className="flex-1 container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center tracking-tight">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <User className="h-8 w-8 text-primary" />,
                title: "1. Enter Your Info",
                description: "Fill out a simple form with your details, projects, skills, education, and experience.",
                bgColor: "bg-primary/10",
                iconColor: "text-primary",
              },
              {
                icon: <Palette className="h-8 w-8 text-purple-500" />,
                title: "2. Choose a Template",
                description: "Select from professionally designed templates that showcase your work beautifully.",
                bgColor: "bg-purple-500/10",
                iconColor: "text-purple-500",
              },
              {
                icon: <Code className="h-8 w-8 text-indigo-500" />,
                title: "3. Get Your Portfolio",
                description: "Preview your portfolio and download the Next.js code ready for deployment.",
                bgColor: "bg-indigo-500/10",
                iconColor: "text-indigo-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardRefs.current[index] = el
                }}
                className="card-hover bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:border-primary/50"
              >
                <div className={`${item.bgColor} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div ref={templateRef} className="bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-2xl p-10 md:p-14 mb-20 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">Modern Portfolio Templates</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
                  Our templates are crafted by professionals to make your portfolio stand out. They're responsive, fast, and built with cutting-edge technologies.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Built with Next.js and Tailwind CSS",
                    "Fully responsive for all devices",
                    "SEO optimized to help you get discovered",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <AuthLink href="/builder/info">
                  <Button className="glow-button rounded-full px-6">
                    Start Building <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </AuthLink>
              </div>
              <div className="relative">
                <div className="image-tilt bg-card rounded-xl overflow-hidden shadow-xl border border-border/50 transition-transform duration-300">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Portfolio template preview"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div ref={ctaRef} className="text-center py-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">Ready to Create Your Portfolio?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of professionals who have built their online presence with our portfolio builder.
            </p>
            <AuthLink href="/builder/info">
              <Button size="lg" className="glow-button rounded-full px-10 py-6 shadow-lg hover:shadow-primary/30">
                Get Started <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </AuthLink>
          </div>
        </div>
      </main>

      <footer className="bg-muted/30 border-t border-border/50 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent tracking-tight">
                  Portfolio Builder
                </h3>
              </div>
              <div className="flex space-x-8">
                {["About", "Templates", "Examples", "Contact"].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    ref={(el) => {
                      if (el) footerLinksRef.current[index] = el
                    }}
                    className="underline-hover text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm mb-6 md:mb-0">
                © {new Date().getFullYear()} Portfolio Builder. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {[
                  {
                    icon: (
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    ),
                  },
                  {
                    icon: (
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    ),
                  },
                  {
                    icon: (
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    ),
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="underline-hover text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
