import type { PortfolioData } from "@/types/portfolio"

export function generatePortfolioCode(data: PortfolioData): string {
  switch (data.template) {
    case "minimal":
      return generateMinimalTemplate(data)
    case "professional":
      return generateProfessionalTemplate(data)
    case "creative":
      return generateCreativeTemplate(data)
    default:
      return generateMinimalTemplate(data)
  }
}

function generateMinimalTemplate(data: PortfolioData): string {
  return `
// This is a Next.js project with Tailwind CSS
// To use this code:
// 1. Create a new Next.js project: npx create-next-app@latest my-portfolio
// 2. Install Tailwind CSS: npm install -D tailwindcss postcss autoprefixer
// 3. Initialize Tailwind CSS: npx tailwindcss init -p
// 4. Replace the files with the code below

// File: app/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">${data.name}</h1>
          <p className="text-xl md:text-2xl text-gray-600 mt-2">${data.title}</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="prose prose-lg max-w-none">
            <p>${data.description}</p>
          </div>
        </section>
        
        ${
          data.projects.length > 0
            ? `
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Projects</h2>
          <div className="space-y-8">
            ${data.projects
              .map(
                (project) => `
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">${project.title}</h3>
              <p className="text-gray-700 mb-4">${project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                ${project.technologies
                  .map(
                    (tech) => `
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">${tech}</span>
                `,
                  )
                  .join("")}
              </div>
              ${
                project.link
                  ? `
              <a href="${project.link}" target="_blank" rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              `
                  : ""
              }
            </div>
            `,
              )
              .join("")}
          </div>
        </section>
        `
            : ""
        }
        
        ${
          data.skills.length > 0
            ? `
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            ${data.skills
              .map(
                (skill) => `
            <div className="bg-gray-100 rounded-lg px-4 py-2">
              <div className="font-medium">${skill.name}</div>
              <div className="flex mt-1">
                ${Array.from({ length: 5 })
                  .map(
                    (_, i) => `
                <div className="w-3 h-3 rounded-full mr-1 ${i < skill.level ? "bg-blue-500" : "bg-gray-300"}"></div>
                `,
                  )
                  .join("")}
              </div>
            </div>
            `,
              )
              .join("")}
          </div>
        </section>
        `
            : ""
        }
        
        ${
          data.education.length > 0
            ? `
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
          <div className="space-y-6">
            ${data.education
              .map(
                (edu) => `
            <div className="border-l-4 border-gray-200 pl-4 py-1">
              <h3 className="text-xl font-semibold text-gray-900">${edu.institution}</h3>
              <p className="text-gray-700">${edu.degree} in ${edu.field}</p>
              <p className="text-gray-500 text-sm">
                ${new Date(edu.startDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })} - 
                ${edu.endDate ? new Date(edu.endDate).toLocaleDateString("en-US", { year: "numeric", month: "short" }) : "Present"}
              </p>
            </div>
            `,
              )
              .join("")}
          </div>
        </section>
        `
            : ""
        }
        
        ${
          data.experience.length > 0
            ? `
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
          <div className="space-y-8">
            ${data.experience
              .map(
                (exp) => `
            <div className="border-l-4 border-gray-200 pl-4 py-1">
              <h3 className="text-xl font-semibold text-gray-900">${exp.position}</h3>
              <p className="text-gray-700 font-medium">${exp.company}</p>
              <p className="text-gray-500 text-sm mb-2">
                ${new Date(exp.startDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })} - 
                ${exp.endDate ? new Date(exp.endDate).toLocaleDateString("en-US", { year: "numeric", month: "short" }) : "Present"}
              </p>
              <p className="text-gray-700">${exp.description}</p>
            </div>
            `,
              )
              .join("")}
          </div>
        </section>
        `
            : ""
        }
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact</h2>
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <a href="mailto:${data.contact.email}" className="text-blue-600 hover:text-blue-800">
                  ${data.contact.email}
                </a>
              </div>
              
              ${
                data.contact.phone
                  ? `
              <div>
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p>${data.contact.phone}</p>
              </div>
              `
                  : ""
              }
              
              <div className="flex flex-wrap gap-4 pt-4">
                ${
                  data.contact.linkedin
                    ? `
                <a href="${data.contact.linkedin}" target="_blank" rel="noopener noreferrer" 
                  className="bg-[#0077B5] text-white px-4 py-2 rounded-lg inline-flex items-center hover:bg-[#0077B5]/90 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
                `
                    : ""
                }
                
                ${
                  data.contact.github
                    ? `
                <a href="${data.contact.github}" target="_blank" rel="noopener noreferrer" 
                  className="bg-[#333] text-white px-4 py-2 rounded-lg inline-flex items-center hover:bg-[#333]/90 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                `
                    : ""
                }
                
                ${
                  data.contact.website
                    ? `
                <a href="${data.contact.website}" target="_blank" rel="noopener noreferrer" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg inline-flex items-center hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  Website
                </a>
                `
                    : ""
                }
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-100 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; ${new Date().getFullYear()} ${data.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

// File: app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>${data.name} - ${data.title}</title>
        <meta name="description" content="${data.description.substring(0, 160)}" />
      </head>
      <body>{children}</body>
    </html>
  )
}

// File: tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

// File: package.json (dependencies section)
{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.9",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.3"
  }
}
`
}

function generateProfessionalTemplate(data: PortfolioData): string {
  return `
// This is a Next.js project with Tailwind CSS
// To use this code:
// 1. Create a new Next.js project: npx create-next-app@latest my-portfolio
// 2. Install Tailwind CSS: npm install -D tailwindcss postcss autoprefixer
// 3. Initialize Tailwind CSS: npx tailwindcss init -p
// 4. Replace the files with the code below

// File: app/page.tsx
'use client'

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import React from "react"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50)
      
      const sections = ['about', 'projects', 'skills', 'education', 'experience', 'contact']
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <header className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolling ? "bg-white shadow-md py-3" : "bg-transparent py-5"}\`}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-center">
            <h1 className={\`font-bold transition-all duration-300 ${isScrolling ? "text-gray-900 text-xl" : "text-white text-2xl"}\`}>
              ${data.name}
            </h1>
            
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {['about', 'projects', 'skills', 'education', 'experience', 'contact'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className={\`capitalize ${
                        activeSection === section
                          ? "text-blue-600 font-medium"
                          : isScrolling
                            ? "text-gray-800 hover:text-blue-600"
                            : "text-white hover:text-blue-200"
                      } transition-colors`
}
\
                    >
{
  section
}
</button>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="md:hidden">
              <button className=
{
  ;`${isScrolling ? "text-gray-900" : "text-white"}`
}
>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth=
{
  2
}
d="M4 6h16M4 12h16M4 18h16" />
</svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <section className="relative h-screen flex items-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">$
{
  data.name
}
</h1>
;(<p className="text-2xl md:text-3xl mb-8">${data.title}</p>) < p
className = "text-xl mb-12 text-blue-100" > $
{
  data.description.substring(0, 200)
}
$
{
  data.description.length > 200 ? "..." : ""
}
</p>
;<button
  onClick={() => scrollToSection("contact")}
  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium text-lg hover:bg-blue-50 transition-colors"
>
  Get in Touch
</button>
</div>
        </div>
      </section>
      
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p>$
{
  data.description
}
</p>
</div>
          </div>
        </section>
        
        $
{
  data.projects.length > 0
    ? `
        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${data.projects
              .map(
                (project) => `
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                ${
                  project.image
                    ? `
                <img src="${project.image}" alt="${project.title}" className="w-full h-full object-cover" />
                `
                    : `
                <div className="text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                `
                }
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">${project.title}</h3>
                <p className="text-gray-700 mb-4">${project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  ${project.technologies
                    .map(
                      (tech) => `
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">${tech}</span>
                  `,
                    )
                    .join("")}
                </div>
                ${
                  project.link
                    ? `
                <a href="${project.link}" target="_blank" rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                `
                    : ""
                }
              </div>
            </div>
            `,
              )
              .join("")}
          </div>
        </section>
        `
    : ""
}

$
{
  data.skills.length > 0
    ? `
        <section id="skills" className="py-16 bg-gray-50 -mx-4 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              ${data.skills
                .map(
                  (skill) => `
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">${skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: \`\${(skill.level / 5) * 100}%\` }}></div>
                </div>
                <div className="text-right text-sm text-gray-500 mt-1">${skill.level}/5</div>
              </div>
              `,
                )
                .join("")}
            </div>
          </div>
        </section>
        `
    : ""
}

$
{
  data.education.length > 0
    ? `
        <section id="education" className="py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              ${data.education
                .map(
                  (edu, index) => `
              <div className="relative pl-8 ${index !== data.education.length - 1 ? "pb-12" : ""}">
                ${
                  index !== data.education.length - 1
                    ? `
                <div className="absolute top-0 left-0 h-full w-px bg-blue-200"></div>
                `
                    : ""
                }
                <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-blue-600 shadow-md transform -translate-x-1/2"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">${edu.institution}</h3>
                  <p className="text-gray-700 font-medium">${edu.degree} in ${edu.field}</p>
                  <p className="text-gray-500 text-sm">
                    ${new Date(edu.startDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })} - 
                    ${edu.endDate ? new Date(edu.endDate).toLocaleDateString("en-US", { year: "numeric", month: "short" }) : "Present"}
                  </p>
                </div>
              </div>
              `,
                )
                .join("")}
            </div>
          </div>
        </section>
        `
    : ""
}

$
{
  data.experience.length > 0
    ? `
        <section id="experience" className="py-16 bg-gray-50 -mx-4 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-12">
                ${data.experience
                  .map(
                    (exp, index) => `
                <div className="relative pl-8 ${index !== data.experience.length - 1 ? "pb-12" : ""}">
                  ${
                    index !== data.experience.length - 1
                      ? `
                  <div className="absolute top-0 left-0 h-full w-px bg-blue-200"></div>
                  `
                      : ""
                  }
                  <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-blue-600 shadow-md transform -translate-x-1/2"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">${exp.position}</h3>
                    <p className="text-gray-700 font-medium">${exp.company}</p>
                    <p className="text-gray-500 text-sm mb-2">
                      ${new Date(exp.startDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })} - 
                      ${exp.endDate ? new Date(exp.endDate).toLocaleDateString("en-US", { year: "numeric", month: "short" }) : "Present"}
                    </p>
                    <p className="text-gray-700">${exp.description}</p>
                  </div>
                </div>
                `,
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </section>
        `
    : ""
}
;<section id="contact" className="py-16">
  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>
  <div className="max-w-3xl mx-auto">
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:${data.contact.email}" className="text-blue-600 hover:text-blue-800">
                    ${data.contact.email}
                  </a>
                </div>
              </div>
              $
              {data.contact.phone
                ? `
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                          <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="text-gray-900">${data.contact.phone}</p>
                        </div>
                      </div>
                      `
                : ""}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect</h3>
              <div className="flex space-x-4">
                $
                {data.contact.linkedin
                  ? `
                        <a href="${data.contact.linkedin}" target="_blank" rel="noopener noreferrer" 
                          className="bg-[#0077B5] text-white p-3 rounded-full hover:bg-[#0077B5]/90 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        `
                  : ""}
                $
                {data.contact.github
                  ? `
                        <a href="${data.contact.github}" target="_blank" rel="noopener noreferrer" 
                          className="bg-[#333] text-white p-3 rounded-full hover:bg-[#333]/90 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                        `
                  : ""}
                $
                {data.contact.website
                  ? `
                        <a href="${data.contact.website}" target="_blank" rel="noopener noreferrer" 
                          className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                        </a>
                        `
                  : ""}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</main>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">$
{
  data.name
}
</h2>
;<p className="text-gray-400">${data.title}</p>
</div>
            
            <div className="flex space-x-6">
              $
{
  data.contact.linkedin
    ? `
              <a href="${data.contact.linkedin}" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              `
    : ""
}

$
{
  data.contact.github
    ? `
              <a href="${data.contact.github}" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              `
    : ""
}

$
{
  data.contact.website
    ? `
              <a href="${data.contact.website}" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
              `
    : ""
}
</div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy
$
{
  new Date().getFullYear()
}
$
{
  data.name
}
. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// File: app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>
          ${data.name} - ${data.title}
        </title>
        <meta name="description" content="${data.description.substring(0, 160)}" />
      </head>
      <body>{children}</body>
    </html>
  )
}

// File: tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}

// File: package.json (dependencies section)
{
  ;("dependencies")
  :
  ;("next")
  : "latest",
    "react": "latest",
    "react-dom": "latest"
  ,
  "devDependencies":
  ;("@tailwindcss/typography")
  : "^0.5.9",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.3"
}
;`
}

function generateCreativeTemplate(data: PortfolioData): string {
  return `
// This is a Next.js project with Tailwind CSS
// To use this code:
// 1. Create a new Next.js project: npx create-next-app@latest my-portfolio
// 2. Install Tailwind CSS: npm install -D tailwindcss postcss autoprefixer
// 3. Initialize Tailwind CSS: npx tailwindcss init -p
// 4. Replace the files with the code below

// File: app/page.tsx
;("use client")

import { useState, useEffect, useRef } from "react"

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  
  const sections = useRef<HTMLElement[]>([])
  
  useEffect(() => {
    sections.current = Array.from(document.querySelectorAll('section[id]'))
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections.current) {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id)
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      })
    }
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ${data.name}
            </h1>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
              
              <nav className="hidden md:block">
                <ul className="flex space-x-8">
                  {['hero', 'about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                    <li key={section}>
                      <button
                        onClick={() => scrollToSection(section)}
                        className={`capitalize ${
                          activeSection === section 
                            ? 'text-purple-600 dark:text-purple-400 font-medium' 
                            : 'text-gray-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                        } transition-colors`}
                      >
                        {section === 'hero' ? 'Home' : section}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <div className="md:hidden">
                <button 
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-gray-800 dark:text-gray-200"
                >
                  {menuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          
          {menuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
              <ul className="space-y-4">
                {['hero', 'about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className={`capitalize block w-full text-left py-2 ${
                        activeSection === section 
                          ? 'text-purple-600 dark:text-purple-400 font-medium' 
                          : 'text-gray-800 dark:text-gray-300'
                      }`}
                    >
                      {section === 'hero' ? 'Home' : section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>
      
      <section id="hero" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
        <div className="absolute inset-0 opacity-30 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=1000&width=1000')] bg-repeat opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">${data.name}</span>
              </h1>
              <p className="text-2xl md:text-3xl mb-6 text-gray-700 dark:text-gray-300">${data.title}</p>
              <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">${data.description.substring(0, 150)}${data.description.length > 150 ? '...' : ''}</p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/25"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-full font-medium hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-all"
                >
                  Contact Me
                </button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden w-full h-full border-4 border-white dark:border-gray-800 shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
              aria-label="Scroll down"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>${data.description}</p>
            </div>
          </div>
        </div>
      </section>
      
      ${data.projects.length > 0 ? `
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${data.projects.map((project, index) => `
            <div className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-900 transform hover:-translate-y-2">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                ${project.image ? `
                <img src="${project.image}" alt="${project.title}" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                ` : `
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                `}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">${project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">${project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  ${project.technologies.map(tech => `
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm">${tech}</span>
                  `).join('')}
                </div>
                
                ${project.link ? `
                <a href="${project.link}" target="_blank" rel="noopener noreferrer" 
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                ` : ''}
              </div>
            </div>
            `).join('')}
          </div>
        </div>
      </section>
      ` : ''}
      
      ${data.skills.length > 0 ? `
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            ${data.skills.map((skill, index) => `
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-900 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">${skill.name}</h3>
                <div className="flex justify-center">
                  ${Array.from({ length: 5 }).map((_, i) => `
                  <div className="w-4 h-4 mx-0.5 rounded-full ${i < skill.level ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gray-200 dark:bg-gray-700'}"></div>
                  `).join('')}
                </div>
              </div>
            </div>
            `).join('')}
          </div>
        </div>
      </section>
      ` : ''}
      
      ${data.education.length > 0 || data.experience.length > 0 ? `
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            ${data.experience.length > 0 ? `
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Work Experience</h3>
              <div className="space-y-8">
                ${data.experience.map((exp, index) => `
                <div className="relative pl-8 ${index !== data.experience.length - 1 ? 'pb-8' : ''}">
                  ${index !== data.experience.length - 1 ? `
                  <div className="absolute top-0 left-0 h-full w-px bg-purple-200 dark:bg-purple-800"></div>
                  ` : ''}
                  <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-md transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">${exp.position}</h4>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">${exp.company}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                      ${new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                      ${exp.endDate ? new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Present'}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">${exp.description}</p>
                  </div>
                </div>
                `).join('')}
              </div>
            </div>
            ` : ''}
            
            ${data.education.length > 0 ? `
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
              <div className="space-y-8">
                ${data.education.map((edu, index) => `
                <div className="relative pl-8 ${index !== data.education.length - 1 ? 'pb-8' : ''}">
                  ${index !== data.education.length - 1 ? `
                  <div className="absolute top-0 left-0 h-full w-px bg-purple-200 dark:bg-purple-800"></div>
                  ` : ''}
                  <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-md transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">${edu.institution}</h4>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">${edu.degree} in ${edu.field}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      ${new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                      ${edu.endDate ? new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Present'}
                    </p>
                  </div>
                </div>
                `).join('')}
              </div>
            </div>
            ` : ''}
          </div>
        </div>
      </section>
      ` : ''}
      
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 mr-4">
                      <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <a href="mailto:${data.contact.email}" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                        ${data.contact.email}
                      </a>
                    </div>
                  </div>
                  
                  ${data.contact.phone ? `
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 mr-4">
                      <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="text-gray-900 dark:text-white">${data.contact.phone}</p>
                    </div>
                  </div>
                  ` : ''}
                  
                  <div className="pt-6">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect with me</p>
                    <div className="flex space-x-4">
                      ${data.contact.linkedin ? `
                      <a href="${data.contact.linkedin}" target="_blank" rel="noopener noreferrer" 
                        className="bg-[#0077B5] text-white p-3 rounded-full hover:bg-[#0077B5]/90 transition-colors shadow-lg">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      ` : ''}
                      
                      ${data.contact.github ? `
                      <a href="${data.contact.github}" target="_blank" rel="noopener noreferrer" 
                        className="bg-[#333] text-white p-3 rounded-full hover:bg-[#333]/90 transition-colors shadow-lg">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      ` : ''}
                      
                      ${data.contact.website ? `
                      <a href="${data.contact.website}" target="_blank" rel="noopener noreferrer" 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-colors shadow-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </a>
                      ` : ''}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/25"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">${data.name}</h2>
              <p className="text-gray-400">${data.title}</p>
            </div>
            
            <div className="flex space-x-6">
              ${data.contact.linkedin ? `
              <a href="${data.contact.linkedin}" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              ` : ''}
              
              ${data.contact.github ? `
              <a href="${data.contact.github}" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              ` : ''}
              
              ${data.contact.website ? `
              <a href="${data.contact.website}" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
              ` : ''}
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; ${new Date().getFullYear()} ${data.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// File: app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>${data.name} - ${data.title}</title>
        <meta name="description" content="${data.description.substring(0, 160)}" />
      </head>
      <body>{children}</body>
    </html>
  )
}

// File: tailwind.config.js
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}

// File: package.json (dependencies section)
{
  ;("dependencies")
  :
  ;("next")
  : "latest",
    "react": "latest",
    "react-dom": "latest"
  ,
  "devDependencies":
  ;("@tailwindcss/typography")
  : "^0.5.9",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.3"
}
`
}

