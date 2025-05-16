"use client"

import { useState } from "react"
import { usePortfolio } from "@/context/portfolio-context"
import { ProgressSteps } from "@/components/progress-steps"
import { FormNavigation } from "@/components/form-navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { FormErrors, Experience } from "@/types/portfolio"

export default function ExperiencePage() {
  const { portfolioData, addExperience, removeExperience } = usePortfolio()
  const [currentExperience, setCurrentExperience] = useState<Omit<Experience, "id">>({
    company: "",
    position: "",
    description: "",
    startDate: "",
    endDate: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validateExperience = () => {
    const newErrors: FormErrors = {}

    if (!currentExperience.company.trim()) {
      newErrors.company = "Company name is required"
    }

    if (!currentExperience.position.trim()) {
      newErrors.position = "Position is required"
    }

    if (!currentExperience.description.trim()) {
      newErrors.description = "Description is required"
    }

    if (!currentExperience.startDate.trim()) {
      newErrors.startDate = "Start date is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleAddExperience = () => {
    if (validateExperience()) {
      addExperience(currentExperience)
      setCurrentExperience({
        company: "",
        position: "",
        description: "",
        startDate: "",
        endDate: "",
      })
      setErrors({})
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Work Experience</h1>
      <ProgressSteps />

      <div className="space-y-8">
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company">
                Company <span className="text-red-500">*</span>
              </Label>
              <Input
                id="company"
                value={currentExperience.company}
                onChange={(e) => setCurrentExperience({ ...currentExperience, company: e.target.value })}
                placeholder="Example Corp"
                className={errors.company ? "border-red-500" : ""}
              />
              {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">
                Position <span className="text-red-500">*</span>
              </Label>
              <Input
                id="position"
                value={currentExperience.position}
                onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })}
                placeholder="Senior Developer"
                className={errors.position ? "border-red-500" : ""}
              />
              {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">
                Description <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="description"
                value={currentExperience.description}
                onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })}
                placeholder="Describe your responsibilities and achievements..."
                className={errors.description ? "border-red-500" : ""}
                rows={3}
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">
                  Start Date <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="startDate"
                  type="month"
                  value={currentExperience.startDate}
                  onChange={(e) => setCurrentExperience({ ...currentExperience, startDate: e.target.value })}
                  className={errors.startDate ? "border-red-500" : ""}
                />
                {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="endDate">
                  End Date <span className="text-muted-foreground">(leave blank if current)</span>
                </Label>
                <Input
                  id="endDate"
                  type="month"
                  value={currentExperience.endDate}
                  onChange={(e) => setCurrentExperience({ ...currentExperience, endDate: e.target.value })}
                />
              </div>
            </div>

            <Button type="button" onClick={handleAddExperience} className="w-full mt-4">
              Add Experience
            </Button>
          </CardContent>
        </Card>

        {portfolioData.experience.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Your Experience</h2>

            {portfolioData.experience.map((exp) => (
              <Card key={exp.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{exp.position}</h3>
                      <p>{exp.company}</p>
                      <p className="text-muted-foreground text-sm">
                        {new Date(exp.startDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })} -
                        {exp.endDate
                          ? new Date(exp.endDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })
                          : " Present"}
                      </p>
                      <p className="mt-2">{exp.description}</p>
                    </div>

                    <Button variant="destructive" size="sm" onClick={() => removeExperience(exp.id)}>
                      Remove
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <FormNavigation prevPath="/builder/education" nextPath="/builder/contact" />
    </div>
  )
}

