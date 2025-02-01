import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Code, Trophy } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">About CodeCrack</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <p className="text-lg mb-4">
            CodeCrack was founded in 2023 with a mission to empower developers worldwide by providing a platform for
            continuous learning and skill improvement.
          </p>
          <p className="text-lg mb-4">
            Our team of experienced developers and educators is passionate about creating high-quality coding challenges
            and fostering a supportive community of learners.
          </p>
          <p className="text-lg mb-6">
            With CodeCrack, we aim to bridge the gap between theoretical knowledge and practical coding skills, helping
            developers of all levels to excel in their careers and personal projects.
          </p>
          <Button size="lg">Join Our Community</Button>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <img src="https://avatars.githubusercontent.com/u/98689480?v=4" alt="CodeCrack Team" className="object-cover w-full h-full" />
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-8 text-center">Why Choose CodeCrack?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          {
            icon: CheckCircle,
            title: "Quality Content",
            description: "Curated challenges designed by industry experts",
          },
          { icon: Users, title: "Supportive Community", description: "Connect and learn with peers worldwide" },
          { icon: Code, title: "Practical Skills", description: "Gain hands-on experience with real-world problems" },
          {
            icon: Trophy,
            title: "Career Growth",
            description: "Prepare for technical interviews and advance your career",
          },
        ].map((item, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="mb-4 text-primary">
                <item.icon size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Crack the Code?</h2>
        <p className="text-lg mb-6">Join thousands of developers who are improving their skills with CodeCrack.</p>
        <Button size="lg">Get Started for Free</Button>
      </div>
    </div>
  )
}

