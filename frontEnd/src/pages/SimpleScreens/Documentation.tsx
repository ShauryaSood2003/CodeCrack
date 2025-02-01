import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const docSections = [
  {
    title: "Getting Started",
    description: "Learn the basics of CodeCrack and set up your environment.",
    a: "/documentation/getting-started",
  },
  {
    title: "Problem Solving",
    description: "Understand how to approach and solve coding problems on CodeCrack.",
    a: "/documentation/problem-solving",
  },
  {
    title: "Contests",
    description: "Learn about CodeCrack contests and how to participate.",
    a: "/documentation/contests",
  },
  {
    title: "API Reference",
    description: "Explore the CodeCrack API for integrating with your applications.",
    a: "/documentation/api-reference",
  },
  // Add more documentation sections as needed
]

export default function DocumentationPage() {
  return (
    <div className="space-y-6  px-10 flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold">Documentation</h1>
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search documentation..." className="pl-8" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {docSections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href={section.a}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                Read More
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

