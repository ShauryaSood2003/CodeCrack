import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function CTA() {
    const navigate=useNavigate();

    return (
        <section className="py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Crack the Code?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are improving their coding skills and advancing their careers with CodeCrack.
            </p>
            <Button size="lg" variant="secondary" onClick={()=>navigate("/signup")}>
            Sign Up Now
            </Button>
        </div>
        </section>
    )
}

