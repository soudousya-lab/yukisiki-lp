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
import SimulationSection from "@/components/SimulationSection";
import PriceSection from "@/components/PriceSection";
import AccessSection from "@/components/AccessSection";
import ReserveSection from "@/components/ReserveSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import GradientDivider from "@/components/GradientDivider";
import ScrollDepthTracker from "@/components/ScrollDepthTracker";
import AnswerSummary from "@/components/AnswerSummary";
import JsonLd from "@/components/JsonLd";
import { homeAiOverview } from "@/lib/aiOverviewContent";
import { faqSchema } from "@/lib/structuredData";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(homeAiOverview.faqs)} />
      <Header />
      <main>
        <HeroSection />
        <AnswerSummary content={homeAiOverview} />
        <BeforeAfterSection />
        <AboutSection />
        <GradientDivider from="var(--color-warm-white)" to="var(--color-charcoal)" />
        <ConcernSection />
        <GradientDivider from="var(--color-charcoal)" to="var(--color-ivory)" />
        <DifferenceSection />
        <GradientDivider from="var(--color-ivory)" to="var(--color-charcoal)" />
        <ResultsSection />
        <GradientDivider from="var(--color-charcoal)" to="var(--color-warm-white)" />
        <TestimonialsSection />
        <TherapistSection />
        <FlowSection />
        <GradientDivider from="var(--color-ivory)" to="var(--color-charcoal)" />
        <SimulationSection />
        <GradientDivider from="var(--color-charcoal)" to="var(--color-warm-white)" />
        <PriceSection />
        <AccessSection />
        <GradientDivider from="var(--color-ivory)" to="var(--color-charcoal)" />
        <ReserveSection />
      </main>
      <Footer />
      <FloatingCTA />
      <ScrollDepthTracker />
    </>
  );
}
