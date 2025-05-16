"use client"

import { usePortfolio } from "@/context/portfolio-context"
import { ProgressSteps } from "@/components/progress-steps"
import { FormNavigation } from "@/components/form-navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function TemplatePage() {
  const { setTemplate } = usePortfolio()

  // Always set the template to "minimal" since we only have one template now
  const handleSelectTemplate = () => {
    setTemplate("minimal")
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
        Portfolio Template
      </h1>
      <ProgressSteps />

      <div className="mb-8">
        <Card
          className="cursor-pointer transition-all duration-300 overflow-hidden ring-2 ring-primary shadow-lg"
          onClick={handleSelectTemplate}
        >
          <div className="relative">
            <div className="aspect-[16/9] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 p-4 flex items-center justify-center">
                <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        John Doe
                      </div>
                      <div className="flex space-x-4">
                        <div className="h-2 w-12 bg-gray-300 rounded"></div>
                        <div className="h-2 w-12 bg-gray-300 rounded"></div>
                        <div className="h-2 w-12 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-1">
                        <div className="h-8 w-48 bg-gradient-to-r from-blue-600 to-purple-600 rounded mb-3"></div>
                        <div className="h-4 w-32 bg-blue-500/30 rounded mb-4"></div>
                        <div className="h-3 w-full bg-gray-300 rounded mb-2"></div>
                        <div className="h-3 w-full bg-gray-300 rounded mb-2"></div>
                        <div className="h-3 w-2/3 bg-gray-300 rounded mb-4"></div>
                        <div className="h-10 w-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      </div>
                      <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-6">
                      <div className="flex justify-center mb-4">
                        <div className="h-6 w-32 bg-gray-800 rounded relative">
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                        </div>
                      </div>
                      <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
                        <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                        <div className="flex gap-1 mb-2">
                          <div className="h-5 w-12 bg-blue-100 rounded-full"></div>
                          <div className="h-5 w-12 bg-blue-100 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
                        <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                        <div className="flex gap-1 mb-2">
                          <div className="h-5 w-12 bg-blue-100 rounded-full"></div>
                          <div className="h-5 w-12 bg-blue-100 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
              <Check className="h-4 w-4" />
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="font-medium text-lg">Professional Portfolio</h3>
            <p className="text-sm text-muted-foreground">
              Modern, clean design with smooth animations and responsive layout
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border/50 mb-8">
        <div className="p-6 border-b border-border/50">
          <h2 className="text-xl font-semibold">Template Features</h2>
        </div>

        <div className="p-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">Modern Design</span>
                <p className="text-sm text-muted-foreground">
                  Clean, professional layout with subtle animations and visual effects
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">Fully Responsive</span>
                <p className="text-sm text-muted-foreground">
                  Optimized for all devices from mobile phones to large desktop screens
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">Performance Optimized</span>
                <p className="text-sm text-muted-foreground">Fast loading times with optimized code and assets</p>
              </div>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">SEO Friendly</span>
                <p className="text-sm text-muted-foreground">
                  Built with best practices for search engine optimization
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">Interactive Elements</span>
                <p className="text-sm text-muted-foreground">
                  Smooth scrolling, active navigation highlighting, and contact form
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <FormNavigation prevPath="/builder/contact" nextPath="/builder/preview" />
    </div>
  )
}

