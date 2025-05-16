"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { v4 as uuidv4 } from "uuid"
import type { PortfolioData, Project, Skill, Education, Experience, TemplateType } from "@/types/portfolio"

interface PortfolioContextType {
  portfolioData: PortfolioData
  updateBasicInfo: (data: Partial<PortfolioData>) => void
  addProject: (project: Omit<Project, "id">) => void
  updateProject: (id: string, project: Partial<Project>) => void
  removeProject: (id: string) => void
  addSkill: (skill: Omit<Skill, "id">) => void
  updateSkill: (id: string, skill: Partial<Skill>) => void
  removeSkill: (id: string) => void
  addEducation: (education: Omit<Education, "id">) => void
  updateEducation: (id: string, education: Partial<Education>) => void
  removeEducation: (id: string) => void
  addExperience: (experience: Omit<Experience, "id">) => void
  updateExperience: (id: string, experience: Partial<Experience>) => void
  removeExperience: (id: string) => void
  updateContact: (contact: Partial<PortfolioData["contact"]>) => void
  setTemplate: (template: TemplateType) => void
  resetPortfolio: () => void
}

const defaultPortfolioData: PortfolioData = {
  name: "",
  title: "",
  description: "",
  projects: [],
  skills: [],
  education: [],
  experience: [],
  contact: {
    email: "",
  },
  template: "minimal",
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined)

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(defaultPortfolioData)

  const updateBasicInfo = (data: Partial<PortfolioData>) => {
    setPortfolioData((prev) => ({ ...prev, ...data }))
  }

  const addProject = (project: Omit<Project, "id">) => {
    const newProject = { ...project, id: uuidv4() }
    setPortfolioData((prev) => ({
      ...prev,
      projects: [...prev.projects, newProject],
    }))
  }

  const updateProject = (id: string, project: Partial<Project>) => {
    setPortfolioData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, ...project } : p)),
    }))
  }

  const removeProject = (id: string) => {
    setPortfolioData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id),
    }))
  }

  const addSkill = (skill: Omit<Skill, "id">) => {
    const newSkill = { ...skill, id: uuidv4() }
    setPortfolioData((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill],
    }))
  }

  const updateSkill = (id: string, skill: Partial<Skill>) => {
    setPortfolioData((prev) => ({
      ...prev,
      skills: prev.skills.map((s) => (s.id === id ? { ...s, ...skill } : s)),
    }))
  }

  const removeSkill = (id: string) => {
    setPortfolioData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s.id !== id),
    }))
  }

  const addEducation = (education: Omit<Education, "id">) => {
    const newEducation = { ...education, id: uuidv4() }
    setPortfolioData((prev) => ({
      ...prev,
      education: [...prev.education, newEducation],
    }))
  }

  const updateEducation = (id: string, education: Partial<Education>) => {
    setPortfolioData((prev) => ({
      ...prev,
      education: prev.education.map((e) => (e.id === id ? { ...e, ...education } : e)),
    }))
  }

  const removeEducation = (id: string) => {
    setPortfolioData((prev) => ({
      ...prev,
      education: prev.education.filter((e) => e.id !== id),
    }))
  }

  const addExperience = (experience: Omit<Experience, "id">) => {
    const newExperience = { ...experience, id: uuidv4() }
    setPortfolioData((prev) => ({
      ...prev,
      experience: [...prev.experience, newExperience],
    }))
  }

  const updateExperience = (id: string, experience: Partial<Experience>) => {
    setPortfolioData((prev) => ({
      ...prev,
      experience: prev.experience.map((e) => (e.id === id ? { ...e, ...experience } : e)),
    }))
  }

  const removeExperience = (id: string) => {
    setPortfolioData((prev) => ({
      ...prev,
      experience: prev.experience.filter((e) => e.id !== id),
    }))
  }

  const updateContact = (contact: Partial<PortfolioData["contact"]>) => {
    setPortfolioData((prev) => ({
      ...prev,
      contact: { ...prev.contact, ...contact },
    }))
  }

  const setTemplate = (template: TemplateType) => {
    setPortfolioData((prev) => ({ ...prev, template }))
  }

  const resetPortfolio = () => {
    setPortfolioData(defaultPortfolioData)
  }

  return (
    <PortfolioContext.Provider
      value={{
        portfolioData,
        updateBasicInfo,
        addProject,
        updateProject,
        removeProject,
        addSkill,
        updateSkill,
        removeSkill,
        addEducation,
        updateEducation,
        removeEducation,
        addExperience,
        updateExperience,
        removeExperience,
        updateContact,
        setTemplate,
        resetPortfolio,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const context = useContext(PortfolioContext)
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider")
  }
  return context
}

