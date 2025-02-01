import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-24 px-6 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        Crack the Code, Unlock Your Potential
      </h1>
      <p className="mt-6 text-xl max-w-3xl mx-auto">
        CodeCrack is your gateway to mastering coding challenges, competing with peers, and landing your dream tech job.
      </p>
      <div className="mt-10 flex justify-center space-x-4">
        <Button size="lg" variant="secondary">
          Get Started
        </Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>
    </section>
  )
}

