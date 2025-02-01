import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Header from "@/components/header/Header"

export default function CookiePolicyPage() {
  const sections = [
    {
      title: "What are cookies?",
      content: "Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information."
    },
    {
      title: "Why do we use cookies?",
      content: "We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as \"essential\" or \"strictly necessary\" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our Website. Third parties serve cookies through our Website for advertising, analytics and other purposes."
    },
    {
      title: "How can I control cookies?",
      content: "You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services."
    },
    {
      title: "Changes to this Cookie Policy",
      content: "We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies."
    }
  ]

  return (
    <div>
        <Header/>
        <div className="container py-12 px-4 max-w-4xl mx-auto">
        <Card>
            <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Cookie Policy</CardTitle>
            </CardHeader>
            <CardContent>
            <p className="text-muted-foreground mb-6 text-center">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mb-6">
                This Cookie Policy explains how CodeCrack ("we", "us", and "our") uses cookies and similar technologies to
                recognize you when you visit our website at codecrack.com ("Website"). It explains what these technologies are
                and why we use them, as well as your rights to control our use of them.
            </p>
            <Accordion type="single" collapsible className="w-full mb-6">
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
                <h2 className="text-2xl font-semibold mb-4">Contact us</h2>
                <p className="text-muted-foreground mb-4">
                If you have any questions about our use of cookies or other technologies, please email us at:
                </p>
                <Button asChild>
                <a href="mailto:privacy@codecrack.com">privacy@codecrack.com</a>
                </Button>
            </div>
            </CardContent>
        </Card>
        </div>
    </div>
  )
}
