
export default function Footer() {
  return (
    <footer className="bg-muted py-12 px-10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="/features" className="text-muted-foreground hover:text-foreground">
                  Features
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </a>
              </li>
              <li>
                <a href="/tutorials" className="text-muted-foreground hover:text-foreground">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="/docs" className="text-muted-foreground hover:text-foreground">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-muted-foreground/10 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CodeCrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

