"use client"

import { useState, useEffect } from "react"
import { usePortfolio } from "@/context/portfolio-context"
import { ProgressSteps } from "@/components/progress-steps"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { generatePortfolioCode } from "@/lib/portfolio-generator"
import { Copy, Download, ExternalLink, Check } from "lucide-react"

export default function PreviewPage() {
  const { portfolioData } = usePortfolio()
  const [generatedCode, setGeneratedCode] = useState<string>("")
  const [activeTab, setActiveTab] = useState<string>("preview")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    try {
      const code = generatePortfolioCode(portfolioData)
      setGeneratedCode(code)
    } catch (error) {
      console.error("Error generating code:", error)
      setGeneratedCode("Error generating code. Please try again.")
    }
  }, [portfolioData])

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownloadCode = () => {
    const blob = new Blob([generatedCode], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "portfolio.html"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleOpenInNewTab = () => {
    const blob = new Blob([generatedCode], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    window.open(url, "_blank")
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
        Preview Your Portfolio
      </h1>
      <ProgressSteps />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="preview" className="text-base">
            Preview
          </TabsTrigger>
          <TabsTrigger value="code" className="text-base">
            Code
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="mt-6">
          <Card className="border-border/40 shadow-lg overflow-hidden">
            <CardHeader className="bg-muted/30 flex flex-row items-center justify-between">
              <div>
                <CardTitle>Portfolio Preview</CardTitle>
                <CardDescription>See how your portfolio will look</CardDescription>
              </div>
              <Button
                onClick={handleOpenInNewTab}
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Open in New Tab
              </Button>
            </CardHeader>

            <CardContent className="p-0">
              <div className="border-t border-border/40 h-[600px]">
                <iframe
                  srcDoc={generatedCode}
                  title="Portfolio Preview"
                  className="w-full h-full"
                  sandbox="allow-scripts"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="mt-6">
          <Card className="border-border/40 shadow-lg overflow-hidden">
            <CardHeader className="bg-muted/30 flex flex-row items-center justify-between">
              <div>
                <CardTitle>Generated Code</CardTitle>
                <CardDescription>Copy or download the code for your portfolio</CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  onClick={handleCopyCode}
                  className="flex items-center transition-all duration-300"
                >
                  {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                  {copied ? "Copied!" : "Copy Code"}
                </Button>
                <Button
                  onClick={handleDownloadCode}
                  className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                >
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <div className="bg-muted/30 p-4 rounded-lg overflow-auto max-h-[600px] border-t border-border/40">
                <pre className="text-sm">
                  <code>{generatedCode}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <Card className="border-border/40 shadow-md">
              <CardHeader className="bg-muted/30">
                <CardTitle>Usage Instructions</CardTitle>
                <CardDescription>Follow these steps to use your portfolio</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ol className="list-decimal list-inside space-y-3">
                  <li className="text-base">
                    <span className="font-medium">Download the HTML file</span>
                    <p className="ml-6 text-muted-foreground">
                      Click the "Download" button above to get your portfolio as an HTML file.
                    </p>
                  </li>
                  <li className="text-base">
                    <span className="font-medium">Host your portfolio</span>
                    <p className="ml-6 text-muted-foreground">
                      Upload the HTML file to any web hosting service like GitHub Pages, Netlify, or Vercel.
                    </p>
                  </li>
                  <li className="text-base">
                    <span className="font-medium">Customize further (optional)</span>
                    <p className="ml-6 text-muted-foreground">
                      You can edit the HTML file to make additional customizations if needed.
                    </p>
                  </li>
                  <li className="text-base">
                    <span className="font-medium">Add a custom domain (optional)</span>
                    <p className="ml-6 text-muted-foreground">
                      Configure a custom domain through your hosting provider for a professional touch.
                    </p>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between mt-8 mb-16">
        <Button
          variant="outline"
          onClick={() => (window.location.href = "/builder/template")}
          className="transition-all duration-300 hover:bg-muted/50"
        >
          Back to Template
        </Button>
        <Button
          onClick={() => (window.location.href = "/")}
          className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all shadow-md hover:shadow-lg"
        >
          Finish
        </Button>
      </div>
    </div>
  )
}

