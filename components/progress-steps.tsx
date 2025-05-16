"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

const steps = [
  { name: "Personal Info", path: "/builder/info" },
  { name: "Projects", path: "/builder/projects" },
  { name: "Skills", path: "/builder/skills" },
  { name: "Education", path: "/builder/education" },
  { name: "Experience", path: "/builder/experience" },
  { name: "Contact", path: "/builder/contact" },
  { name: "Template", path: "/builder/template" },
  { name: "Preview", path: "/builder/preview" },
]

export function ProgressSteps() {
  const pathname = usePathname()

  const currentStepIndex = steps.findIndex((step) => step.path === pathname)

  return (
    <div className="w-full mb-10">
      <div className="hidden md:flex justify-between items-center">
        {steps.map((step, index) => {
          const isActive = index === currentStepIndex
          const isCompleted = index < currentStepIndex

          return (
            <div key={step.path} className="flex flex-col items-center">
              <Link
                href={step.path}
                className={cn(
                  "relative flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-medium transition-all duration-300",
                  isCompleted
                    ? "bg-gradient-to-r from-primary to-purple-600 text-white border-transparent shadow-md"
                    : isActive
                      ? "border-primary text-primary"
                      : "border-muted-foreground/30 text-muted-foreground",
                )}
              >
                {isCompleted ? <Check className="h-5 w-5" /> : index + 1}
              </Link>
              <span
                className={cn(
                  "mt-2 text-xs font-medium transition-colors duration-300",
                  isActive ? "text-primary" : isCompleted ? "text-primary/80" : "text-muted-foreground",
                )}
              >
                {step.name}
              </span>
            </div>
          )
        })}
      </div>

      {/* Mobile view */}
      <div className="md:hidden flex items-center justify-between mb-4">
        <span className="text-sm font-medium">
          Step {currentStepIndex + 1} of {steps.length}
        </span>
        <span className="text-sm font-medium text-primary">{steps[currentStepIndex].name}</span>
      </div>

      <div className="mt-4 relative">
        <div className="absolute top-0 left-0 h-2 bg-muted/50 w-full rounded-full"></div>
        <div
          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-primary to-purple-600 rounded-full transition-all duration-500"
          style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}

