import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ConcernSection from "@/components/ConcernSection";
import DifferenceSection from "@/components/DifferenceSection";
import ResultsSection from "@/components/ResultsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TherapistSection from "@/components/TherapistSection";
import FlowSection from "@/components/FlowSection";
import PriceSection from "@/components/PriceSection";
import AccessSection from "@/components/AccessSection";
import ReserveSection from "@/components/ReserveSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ConcernSection />
        <DifferenceSection />
        <ResultsSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <TherapistSection />
        <FlowSection />
        <PriceSection />
        <AccessSection />
        <ReserveSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
