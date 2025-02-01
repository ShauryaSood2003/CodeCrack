import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Code, Zap, TrendingUp, Trophy, MessageSquare, Briefcase, Building } from "lucide-react"

const features = [
  {
    title: "Diverse Problem Set",
    description:
      "Access a wide range of coding challenges across various difficulty levels and topics to enhance your skills comprehensively.",
    icon: Code,
  },
  {
    title: "Real-time Code Execution",
    description:
      "Write, run, and test your code in real-time with our powerful online IDE, supporting multiple programming languages.",
    icon: Zap,
  },
  {
    title: "Detailed Explanations",
    description:
      "Learn from comprehensive solution explanations and editorial content to understand optimal approaches and improve your problem-solving skills.",
    icon: CheckCircle,
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your coding journey with detailed statistics, performance metrics, and personalized learning recommendations.",
    icon: TrendingUp,
  },
  {
    title: "Competitive Contests",
    description:
      "Participate in regular coding competitions to challenge yourself, compete with peers, and win exciting prizes.",
    icon: Trophy,
  },
  {
    title: "Discussion Forums",
    description:
      "Engage with a vibrant community of developers to discuss problems, share insights, and learn collaboratively.",
    icon: MessageSquare,
  },
  {
    title: "Interview Preparation",
    description:
      "Prepare for technical interviews with our curated sets of interview questions and mock interview simulations.",
    icon: Briefcase,
  },
  {
    title: "Company-specific Problem Sets",
    description:
      "Practice with tailored problem sets that reflect the coding challenges used by top tech companies in their hiring processes.",
    icon: Building,
  },
]

export default function FeaturesPage() {
  return (
    <div className="container py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">CodeCrack Features</h1>
      <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
        Discover the powerful features that make CodeCrack the ultimate platform for improving your coding skills and
        advancing your career.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <feature.icon className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

