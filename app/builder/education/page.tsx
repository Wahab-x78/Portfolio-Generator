"use client"

import { useState } from "react"
import { usePortfolio } from "@/context/portfolio-context"
import { ProgressSteps } from "@/components/progress-steps"
import { FormNavigation } from "@/components/form-navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { FormErrors, Education } from "@/types/portfolio"

export default function EducationPage() {
  const { portfolioData, addEducation, removeEducation } = usePortfolio()
  const [currentEducation, setCurrentEducation] = useState<Omit<Education, "id">>({
    institution: "",
    degree: "",
    field: "",
    startDate: "",
    endDate: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validateEducation = () => {
    const newErrors: FormErrors = {}

    if (!currentEducation.institution.trim()) {
      newErrors.institution = "Institution name is required"
    }

    if (!currentEducation.degree.trim()) {
      newErrors.degree = "Degree is required"
    }

    if (!currentEducation.field.trim()) {
      newErrors.field = "Field of study is required"
    }

    if (!currentEducation.startDate.trim()) {
      newErrors.startDate = "Start date is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleAddEducation = () => {
    if (validateEducation()) {
      addEducation(currentEducation)
      setCurrentEducation({
        institution: "",
        degree: "",
        field: "",
        startDate: "",
        endDate: "",
      })
      setErrors({})
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Education</h1>
      <ProgressSteps />

      <div className="space-y-8">
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="institution">
                Institution <span className="text-red-500">*</span>
              </Label>
              <Input
                id="institution"
                value={currentEducation.institution}
                onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })}
                placeholder="University of Example"
                className={errors.institution ? "border-red-500" : ""}
              />
              {errors.institution && <p className="text-red-500 text-sm">{errors.institution}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="degree">
                Degree <span className="text-red-500">*</span>
              </Label>
              <Input
                id="degree"
                value={currentEducation.degree}
                onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })}
                placeholder="Bachelor's"
                className={errors.degree ? "border-red-500" : ""}
              />
              {errors.degree && <p className="text-red-500 text-sm">{errors.degree}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="field">
                Field of Study <span className="text-red-500">*</span>
              </Label>
              <Input
                id="field"
                value={currentEducation.field}
                onChange={(e) => setCurrentEducation({ ...currentEducation, field: e.target.value })}
                placeholder="Computer Science"
                className={errors.field ? "border-red-500" : ""}
              />
              {errors.field && <p className="text-red-500 text-sm">{errors.field}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">
                  Start Date <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="startDate"
                  type="month"
                  value={currentEducation.startDate}
                  onChange={(e) => setCurrentEducation({ ...currentEducation, startDate: e.target.value })}
                  className={errors.startDate ? "border-red-500" : ""}
                />
                {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="endDate">
                  End Date <span className="text-muted-foreground">(or expected)</span>
                </Label>
                <Input
                  id="endDate"
                  type="month"
                  value={currentEducation.endDate}
                  onChange={(e) => setCurrentEducation({ ...currentEducation, endDate: e.target.value })}
                />
              </div>
            </div>

            <Button type="button" onClick={handleAddEducation} className="w-full mt-4">
              Add Education
            </Button>
          </CardContent>
        </Card>

        {portfolioData.education.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Your Education</h2>

            {portfolioData.education.map((edu) => (
              <Card key={edu.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{edu.institution}</h3>
                      <p>
                        {edu.degree} in {edu.field}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {new Date(edu.startDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })} -
                        {edu.endDate
                          ? new Date(edu.endDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })
                          : " Present"}
                      </p>
                    </div>

                    <Button variant="destructive" size="sm" onClick={() => removeEducation(edu.id)}>
                      Remove
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <FormNavigation prevPath="/builder/skills" nextPath="/builder/experience" />
    </div>
  )
}

