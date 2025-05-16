"use client"

import { useState } from "react"
import { usePortfolio } from "@/context/portfolio-context"
import { ProgressSteps } from "@/components/progress-steps"
import { FormNavigation } from "@/components/form-navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Plus, Trash2 } from "lucide-react"
import type { FormErrors, Skill } from "@/types/portfolio"

export default function SkillsPage() {
  const { portfolioData, addSkill, removeSkill } = usePortfolio()
  const [currentSkill, setCurrentSkill] = useState<Omit<Skill, "id">>({
    name: "",
    level: 3,
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validateSkill = () => {
    const newErrors: FormErrors = {}

    if (!currentSkill.name.trim()) {
      newErrors.name = "Skill name is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleAddSkill = () => {
    if (validateSkill()) {
      addSkill(currentSkill)
      setCurrentSkill({
        name: "",
        level: 3,
      })
      setErrors({})
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
        Skills
      </h1>
      <ProgressSteps />

      <div className="space-y-8">
        <Card className="border-border/40 shadow-md overflow-hidden">
          <CardHeader className="bg-muted/30">
            <CardTitle>Add a New Skill</CardTitle>
            <CardDescription>Showcase your technical abilities and expertise</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base">
                Skill Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                value={currentSkill.name}
                onChange={(e) => setCurrentSkill({ ...currentSkill, name: e.target.value })}
                placeholder="JavaScript"
                className={`${errors.name ? "border-red-500" : ""} transition-all duration-300 focus:ring-2 focus:ring-primary/30`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="level" className="text-base">
                  Proficiency Level
                </Label>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-medium">
                  {currentSkill.level}/5
                </span>
              </div>
              <Slider
                id="level"
                value={[currentSkill.level]}
                min={1}
                max={5}
                step={1}
                onValueChange={(value) => setCurrentSkill({ ...currentSkill, level: value[0] })}
                className="py-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Expert</span>
              </div>
            </div>

            <Button
              type="button"
              onClick={handleAddSkill}
              className="w-full mt-4 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all"
            >
              <Plus className="mr-2 h-4 w-4" /> Add Skill
            </Button>
          </CardContent>
        </Card>

        {portfolioData.skills.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Your Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolioData.skills.map((skill) => (
                <Card key={skill.id} className="border-border/40 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <div className="space-y-2">
                        <h3 className="font-medium">{skill.name}</h3>
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-5 h-2 rounded-full mr-1 ${
                                i < skill.level ? "bg-gradient-to-r from-primary to-purple-600" : "bg-muted"
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-xs text-muted-foreground">{skill.level}/5</span>
                        </div>
                      </div>

                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeSkill(skill.id)}
                        className="hover:bg-destructive/90"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      <FormNavigation prevPath="/builder/projects" nextPath="/builder/education" />
    </div>
  )
}

