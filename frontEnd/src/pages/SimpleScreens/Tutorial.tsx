import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const tutorials = [
  {
    title: "Getting Started with CodeCrack",
    description: "Learn the basics of using CodeCrack to improve your coding skills.",
    difficulty: "Beginner",
    duration: "30 min",
    a: "/tutorials/getting-started",
  },
  {
    title: "Mastering Data Structures",
    description: "Deep dive into essential data structures for coding interviews.",
    difficulty: "Intermediate",
    duration: "1 hour",
    a: "/tutorials/data-structures",
  },
  {
    title: "Advanced Algorithm Techniques",
    description: "Explore advanced algorithmic concepts and problem-solving strategies.",
    difficulty: "Advanced",
    duration: "2 hours",
    a: "/tutorials/advanced-algorithms",
  },
  // Add more tutorials as needed
]

export default function TutorialsPage() {
  return (
    <div className="space-y-6 px-10 flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold">Tutorials</h1>
      <p className="text-xl text-muted-foreground">Enhance your coding skills with our comprehensive tutorials.</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tutorials.map((tutorial) => (
          <Card key={tutorial.title}>
            <CardHeader>
              <CardTitle>{tutorial.title}</CardTitle>
              <CardDescription>{tutorial.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <Badge variant="secondary">{tutorial.difficulty}</Badge>
                <span className="text-sm text-muted-foreground">{tutorial.duration}</span>
              </div>
              <a
                href={tutorial.a}
                className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
              >
                Start Tutorial
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

