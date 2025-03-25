"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface FormNavigationProps {
  prevPath?: string
  nextPath?: string
  onNext?: () => boolean // Return true to proceed, false to prevent navigation
  isLastStep?: boolean
}

export function FormNavigation({ prevPath, nextPath, onNext, isLastStep = false }: FormNavigationProps) {
  const router = useRouter()

  const handleNext = () => {
    if (onNext) {
      const canProceed = onNext()
      if (canProceed && nextPath) {
        router.push(nextPath)
      }
    } else if (nextPath) {
      router.push(nextPath)
    }
  }

  return (
    <div className="flex justify-between mt-8 mb-16">
      {prevPath ? (
        <Button
          variant="outline"
          onClick={() => router.push(prevPath)}
          className="transition-all duration-300 hover:bg-muted/50"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
      ) : (
        <div></div>
      )}

      {nextPath && (
        <Button
          onClick={handleNext}
          className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all shadow-md hover:shadow-lg"
        >
          {isLastStep ? "Finish" : "Next"} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

