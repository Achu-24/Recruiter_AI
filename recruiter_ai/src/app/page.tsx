import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlowchartSection from "@/components/FlowchartSection";
import ImpactMetrics from "@/components/ImpactMetrics";
import PlatformMarquee from "@/components/PlatformMarquee";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FlowchartSection />
      <ImpactMetrics />
      <PlatformMarquee />
      <Testimonials />
      <FAQ />

      <CTA />

      <Footer />
    </main>
  );
}


