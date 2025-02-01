import Hero from "@/components/home/Hero";
import Header from "../components/header/Header";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-background">
        <main>
          <Header/>
          <Hero />
          <Features/>
          <Testimonials />
          <CTA />
       </main>
        <Footer/>
    </div>
  );
}

export default Home;
