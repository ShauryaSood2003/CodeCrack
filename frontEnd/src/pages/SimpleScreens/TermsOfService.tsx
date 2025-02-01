import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Header from "@/components/header/Header"

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "1. Using our Services",
      content:
        "You must follow any policies made available to you within the Services. Don't misuse our Services. For example, don't interfere with our Services or try to access them using a method other than the interface and the instructions that we provide.",
    },
    {
      title: "2. Your CodeCrack Account",
      content:
        "You may need a CodeCrack Account in order to use some of our Services. You may create your own CodeCrack Account, or your CodeCrack Account may be assigned to you by an administrator, such as your employer or educational institution.",
    },
    {
      title: "3. Privacy and Copyright Protection",
      content:
        "CodeCrack's privacy policies explain how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that CodeCrack can use such data in accordance with our privacy policies.",
    },
    {
      title: "4. Your Content in our Services",
      content:
        "Some of our Services allow you to upload, submit, store, send or receive content. You retain ownership of any intellectual property rights that you hold in that content. In short, what belongs to you stays yours.",
    },
    {
      title: "5. Modifying and Terminating our Services",
      content:
        "We are constantly changing and improving our Services. We may add or remove functionalities or features, and we may suspend or stop a Service altogether.",
    },
    {
      title: "6. Our Warranties and Disclaimers",
      content:
        "We provide our Services using a commercially reasonable level of skill and care and we hope that you will enjoy using them. But there are certain things that we don't promise about our Services.",
    },
  ]

  return (
    <div>
        <Header/>
        <div className="container py-12 px-4 max-w-4xl mx-auto">
        <Card>
            <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Terms of Service</CardTitle>
            </CardHeader>
            <CardContent>
            <p className="text-muted-foreground mb-6 text-center">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mb-6">
                Welcome to CodeCrack. By using our services, you're agreeing to these terms. Please read them carefully.
            </p>
            <Accordion type="single" collapsible className="w-full">
                {sections.map((section, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{section.title}</AccordionTrigger>
                    <AccordionContent>
                    <p className="text-muted-foreground">{section.content}</p>
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at:{" "}
                <a href="mailto:legal@codecrack.com" className="text-primary hover:underline">
                    legal@codecrack.com
                </a>
                </p>
            </div>
            </CardContent>
        </Card>
        </div>
    </div>
  )
}

