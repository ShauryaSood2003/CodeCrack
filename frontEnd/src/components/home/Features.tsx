import { Code, Trophy, Users, Zap } from "lucide-react"

const features = [
  {
    name: "Diverse Problem Set",
    description: "Access a vast library of coding challenges across multiple difficulty levels and domains.",
    icon: Code,
  },
  {
    name: "Real-time Feedback",
    description: "Get instant feedback on your code submissions with detailed explanations and test cases.",
    icon: Zap,
  },
  {
    name: "Competitive Contests",
    description: "Participate in regular coding contests to test your skills against peers worldwide.",
    icon: Trophy,
  },
  {
    name: "Collaborative Community",
    description: "Join a vibrant community of developers to discuss solutions and share knowledge.",
    icon: Users,
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose CodeCrack?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

