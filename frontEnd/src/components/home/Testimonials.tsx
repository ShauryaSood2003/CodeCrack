
const testimonials = [
  {
    name: "Alex Johnson",
    role: "Software Engineer at Google",
    content:
      "CodeCrack was instrumental in helping me prepare for my technical interviews. The platform's diverse problem set and real-time feedback significantly improved my coding skills.",
    avatar: "https://avatars.githubusercontent.com/u/98689480?v=4",
  },
  {
    name: "Samantha Lee",
    role: "Full Stack Developer",
    content:
      "The competitive contests on CodeCrack pushed me to think outside the box and solve problems more efficiently. It's an excellent platform for honing your coding abilities.",
    avatar: "https://avatars.githubusercontent.com/u/93878288?v=4",
  },
  {
    name: "Michael Chen",
    role: "Computer Science Student",
    content:
      "As a CS student, CodeCrack has been an invaluable resource. The community discussions and detailed explanations have helped me understand complex algorithms and data structures.",
    avatar: "https://avatars.githubusercontent.com/u/72538458?v=4",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-card rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

