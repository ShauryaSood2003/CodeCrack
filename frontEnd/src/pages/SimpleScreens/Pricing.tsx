import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Access to 100+ coding problems",
      "Basic progress tracking",
      "Community forum access",
    ],
  },
  {
    name: "Pro",
    price: "$9.99/month",
    features: [
      "Access to all coding problems",
      "Advanced progress tracking",
      "Priority support",
      "Ad-free experience",
      "Participate in contests",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "All Pro features",
      "Custom problem sets",
      "Team management",
      "Analytics and reporting",
      "Dedicated account manager",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="container py-12 px-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Choose Your Plan</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className="border rounded-lg p-6 flex flex-col">
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="space-y-2 mb-6 flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full">{plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}</Button>
          </div>
        ))}
      </div>
    </div>
  )
}
