import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import DemoClass from "@/app/components/DemoClass";
import AboutMe from "@/app/components/AboutMe";
import Features from "@/app/components/Features";
import Courses from "@/app/components/Courses";
import FAQ from "@/app/components/FAQ";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-teal-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <DemoClass />
      <AboutMe />
      <Features />
      <Courses />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
