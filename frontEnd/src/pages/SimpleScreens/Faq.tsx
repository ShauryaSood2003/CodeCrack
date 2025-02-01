"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is CodeCrack?",
    answer:
      "CodeCrack is a comprehensive coding platform designed to help developers improve their programming skills through practice problems, coding challenges, and competitive contests.",
  },
  {
    question: "Is CodeCrack suitable for beginners?",
    answer:
      "Yes, CodeCrack caters to all skill levels, from beginners to advanced programmers. We offer a wide range of problems with varying difficulty levels to suit everyone's needs.",
  },
  {
    question: "What programming languages does CodeCrack support?",
    answer:
      "CodeCrack supports a wide variety of popular programming languages, including but not limited to Python, Java, C++, JavaScript, Ruby, and Go.",
  },
  {
    question: "How often are new problems added to CodeCrack?",
    answer:
      "We regularly update our problem set with new challenges. On average, we add 5-10 new problems every week to keep our content fresh and engaging.",
  },
  {
    question: "Can I use CodeCrack to prepare for technical interviews?",
    answer:
      "Many of our users successfully use CodeCrack to prepare for technical interviews. We offer company-specific problem sets and interview preparation guides to help you succeed in your job search.",
  },
  {
    question: "Are there any team features on CodeCrack?",
    answer:
      "Yes, CodeCrack offers team features that allow you to collaborate with others. You can create or join coding groups, participate in team contests, and share problem-solving strategies with your peers.",
  },
  {
    question: "How does CodeCrack's ranking system work?",
    answer:
      "CodeCrack uses a dynamic rating system based on your performance in contests and problem-solving. As you solve more problems and participate in competitions, your rating will adjust to reflect your skill level accurately.",
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container py-12 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      <div className="mb-8 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search FAQs..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredFaqs.length > 0 ? (
        <Accordion type="single" collapsible className="w-full">
          {filteredFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <p className="text-center text-muted-foreground">No matching FAQs found. Please try a different search term.</p>
      )}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
        <p className="text-muted-foreground mb-4">
          If you couldn't find the answer you were looking for, please don't hesitate to reach out to our support team.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Contact Support
        </a>
      </div>
    </div>
  )
}

