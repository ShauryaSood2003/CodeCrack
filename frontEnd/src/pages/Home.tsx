import Hero from "@/components/home/Hero";
import Header from "../components/header/Header";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";
import BottomNav from "@/components/header/BottomNavBar";

function Home() {
  return (
    <div className="min-h-screen bg-background absolute">
        <main>
          <Header/>
          <Hero />
          <Features/>
          <Testimonials />
          <CTA />
          <Footer/>
          <BottomNav/>
       </main>
    </div>
  );
}

export default Home;
