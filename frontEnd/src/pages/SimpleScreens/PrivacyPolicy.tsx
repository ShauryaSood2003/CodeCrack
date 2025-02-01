import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Header from "@/components/header/Header"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We collect information you provide directly to us, such as when you create or modify your account, request customer support, or communicate with us. This information may include your name, email address, and any other information you choose to provide.",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect CodeCrack and our users.",
    },
    {
      title: "Sharing of Information",
      content:
        "We may share the information we collect about you as described in this Privacy Policy or as described at the time of collection or sharing, including as follows: With third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf; In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law, regulation, or legal process; If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of CodeCrack or others.",
    },
    {
      title: "Data Retention",
      content:
        "We retain your information for as long as necessary to provide the services you have requested, or for other essential purposes such as complying with our legal obligations, resolving disputes, and enforcing our policies.",
    },
    {
      title: "Your Rights and Choices",
      content:
        "You have the right to access, correct, or delete your personal information. You can also object to or restrict certain processing of your data. To exercise these rights, please contact us using the information provided in the 'Contact Us' section.",
    },
  ]

  return (
    <div>
        <Header/>
        <div className="container py-12 px-4 max-w-4xl mx-auto">
        <Card>
            <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
            <p className="text-muted-foreground mb-6 text-center">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mb-6">
                CodeCrack ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how
                your personal information is collected, used, and disclosed by CodeCrack.
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
                If you have any questions about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:privacy@codecrack.com" className="text-primary hover:underline">
                    privacy@codecrack.com
                </a>
                </p>
            </div>
            </CardContent>
        </Card>
        </div>
    </div>
  )
}

