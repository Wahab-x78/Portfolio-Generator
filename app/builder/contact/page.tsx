"use client"

import { useState } from "react"
import { usePortfolio } from "@/context/portfolio-context"
import { ProgressSteps } from "@/components/progress-steps"
import { FormNavigation } from "@/components/form-navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { FormErrors } from "@/types/portfolio"

export default function ContactPage() {
  const { portfolioData, updateContact } = usePortfolio()
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!portfolioData.contact.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(portfolioData.contact.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Information</h1>
      <ProgressSteps />

      <div className="space-y-6 bg-card p-6 rounded-lg shadow-sm">
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={portfolioData.contact.email}
            onChange={(e) => updateContact({ email: e.target.value })}
            placeholder="your.email@example.com"
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={portfolioData.contact.phone || ""}
            onChange={(e) => updateContact({ phone: e.target.value })}
            placeholder="+1 (123) 456-7890"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn Profile</Label>
          <Input
            id="linkedin"
            value={portfolioData.contact.linkedin || ""}
            onChange={(e) => updateContact({ linkedin: e.target.value })}
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="github">GitHub Profile</Label>
          <Input
            id="github"
            value={portfolioData.contact.github || ""}
            onChange={(e) => updateContact({ github: e.target.value })}
            placeholder="https://github.com/yourusername"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="website">Personal Website</Label>
          <Input
            id="website"
            value={portfolioData.contact.website || ""}
            onChange={(e) => updateContact({ website: e.target.value })}
            placeholder="https://yourwebsite.com"
          />
        </div>
      </div>

      <FormNavigation prevPath="/builder/experience" nextPath="/builder/template" onNext={validateForm} />
    </div>
  )
}

