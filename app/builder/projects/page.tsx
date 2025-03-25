"use client"

import { useState } from "react"
import { usePortfolio } from "@/context/portfolio-context"
import { ProgressSteps } from "@/components/progress-steps"
import { FormNavigation } from "@/components/form-navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Plus, X, ExternalLink, Trash2 } from "lucide-react"
import type { FormErrors, Project } from "@/types/portfolio"

export default function ProjectsPage() {
  const { portfolioData, addProject, updateProject, removeProject } = usePortfolio()
  const [currentProject, setCurrentProject] = useState<Omit<Project, "id">>({
    title: "",
    description: "",
    technologies: [],
    link: "",
    image: "",
  })
  const [techInput, setTechInput] = useState("")
  const [errors, setErrors] = useState<FormErrors>({})

  const validateProject = () => {
    const newErrors: FormErrors = {}

    if (!currentProject.title.trim()) {
      newErrors.title = "Project title is required"
    }

    if (!currentProject.description.trim()) {
      newErrors.description = "Project description is required"
    }

    if (currentProject.technologies.length === 0) {
      newErrors.technologies = "At least one technology is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleAddTech = () => {
    if (techInput.trim()) {
      setCurrentProject({
        ...currentProject,
        technologies: [...currentProject.technologies, techInput.trim()],
      })
      setTechInput("")
    }
  }

  const handleRemoveTech = (index: number) => {
    setCurrentProject({
      ...currentProject,
      technologies: currentProject.technologies.filter((_, i) => i !== index),
    })
  }

  const handleAddProject = () => {
    if (validateProject()) {
      addProject(currentProject)
      setCurrentProject({
        title: "",
        description: "",
        technologies: [],
        link: "",
        image: "",
      })
      setErrors({})
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
        Projects
      </h1>
      <ProgressSteps />

      <div className="space-y-8">
        <Card className="border-border/40 shadow-md overflow-hidden">
          <CardHeader className="bg-muted/30">
            <CardTitle>Add a New Project</CardTitle>
            <CardDescription>Showcase your best work with detailed project information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-base">
                Project Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="title"
                value={currentProject.title}
                onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
                placeholder="E-commerce Website"
                className={`${errors.title ? "border-red-500" : ""} transition-all duration-300 focus:ring-2 focus:ring-primary/30`}
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-base">
                Project Description <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="description"
                value={currentProject.description}
                onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
                placeholder="Describe your project..."
                className={`${errors.description ? "border-red-500" : ""} transition-all duration-300 focus:ring-2 focus:ring-primary/30`}
                rows={3}
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="technologies" className="text-base">
                Technologies Used <span className="text-red-500">*</span>
              </Label>
              <div className="flex">
                <Input
                  id="technologies"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  placeholder="React, Node.js, etc."
                  className={`${errors.technologies ? "border-red-500" : ""} transition-all duration-300 focus:ring-2 focus:ring-primary/30`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      handleAddTech()
                    }
                  }}
                />
                <Button
                  type="button"
                  onClick={handleAddTech}
                  className="ml-2 bg-primary hover:bg-primary/90"
                  size="icon"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {errors.technologies && <p className="text-red-500 text-sm">{errors.technologies}</p>}

              {currentProject.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {currentProject.technologies.map((tech, index) => (
                    <div key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full flex items-center">
                      {tech}
                      <button
                        type="button"
                        onClick={() => handleRemoveTech(index)}
                        className="ml-2 text-primary/70 hover:text-primary"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="link" className="text-base">
                Project Link
              </Label>
              <Input
                id="link"
                value={currentProject.link || ""}
                onChange={(e) => setCurrentProject({ ...currentProject, link: e.target.value })}
                placeholder="https://example.com"
                className="transition-all duration-300 focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image" className="text-base">
                Project Image URL
              </Label>
              <Input
                id="image"
                value={currentProject.image || ""}
                onChange={(e) => setCurrentProject({ ...currentProject, image: e.target.value })}
                placeholder="https://example.com/image.jpg"
                className="transition-all duration-300 focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <Button
              type="button"
              onClick={handleAddProject}
              className="w-full mt-4 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all"
            >
              <Plus className="mr-2 h-4 w-4" /> Add Project
            </Button>
          </CardContent>
        </Card>

        {portfolioData.projects.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Your Projects</h2>

            {portfolioData.projects.map((project) => (
              <Card key={project.id} className="border-border/40 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium">{project.title}</h3>
                      <p className="text-muted-foreground mt-1">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline mt-2 inline-flex items-center"
                        >
                          View Project <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      )}
                    </div>

                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeProject(project.id)}
                      className="hover:bg-destructive/90"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <FormNavigation prevPath="/builder/info" nextPath="/builder/skills" />
    </div>
  )
}

