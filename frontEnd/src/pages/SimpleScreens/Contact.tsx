import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
            <Input id="subject" placeholder="How can we help?" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <Textarea id="message" placeholder="Your message here..." />
          </div>
          <Button className="w-full">Send Message</Button>
        </form>
      </div>
    </div>
  )
}
