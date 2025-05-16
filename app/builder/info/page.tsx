"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { usePortfolio } from "@/context/portfolio-context"
import { ProgressSteps } from "@/components/progress-steps"
import { FormNavigation } from "@/components/form-navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import type { FormErrors } from "@/types/portfolio"

export default function PersonalInfoPage() {
  const router = useRouter()
  const { portfolioData, updateBasicInfo } = usePortfolio()
  const [errors, setErrors] = useState<FormErrors>({})

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/login")
    }
  }, [router])

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!portfolioData.name.trim()) newErrors.name = "Name is required"
    if (!portfolioData.title.trim()) newErrors.title = "Professional title is required"
    if (!portfolioData.description.trim()) newErrors.description = "Description is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
        Personal Information
      </h1>
      <ProgressSteps />

      <Card className="border-border/40 shadow-md">
        <CardHeader className="bg-muted/30">
          <CardTitle>Tell us about yourself</CardTitle>
          <CardDescription>This information will be displayed at the top of your portfolio</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              value={portfolioData.name}
              onChange={(e) => updateBasicInfo({ name: e.target.value })}
              placeholder="John Doe"
              className={`${errors.name ? "border-red-500" : ""} transition-all duration-300 focus:ring-2 focus:ring-primary/30`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="title" className="text-base">
              Professional Title <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              value={portfolioData.title}
              onChange={(e) => updateBasicInfo({ title: e.target.value })}
              placeholder="Frontend Developer"
              className={`${errors.title ? "border-red-500" : ""} transition-all duration-300 focus:ring-2 focus:ring-primary/30`}
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-base">
              About Me <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="description"
              value={portfolioData.description}
              onChange={(e) => updateBasicInfo({ description: e.target.value })}
              placeholder="Write a brief description about yourself..."
              className={`${errors.description ? "border-red-500" : ""} min-h-[150px] transition-all duration-300 focus:ring-2 focus:ring-primary/30`}
              rows={5}
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>
        </CardContent>
      </Card>

      <FormNavigation prevPath="/" nextPath="/builder/projects" onNext={validateForm} />
    </div>
  )
}