export interface PortfolioData {
  name: string
  title: string
  description: string
  projects: Project[]
  skills: Skill[]
  education: Education[]
  experience: Experience[]
  contact: Contact
  template: TemplateType
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link?: string
  image?: string
}

export interface Skill {
  id: string
  name: string
  level: number // 1-5
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
}

export interface Experience {
  id: string
  company: string
  position: string
  description: string
  startDate: string
  endDate: string
}

export interface Contact {
  email: string
  phone?: string
  linkedin?: string
  github?: string
  website?: string
}

// Simplified to just use "minimal" since we only have one template now
export type TemplateType = "minimal"

export interface FormErrors {
  [key: string]: string
}

