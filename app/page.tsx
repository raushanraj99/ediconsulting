import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import EDIOverviewSection from "@/components/EDIOverviewSection";
import ConsultingServicesSection from "@/components/ConsultingServicesSection";
import ProcessFlowSection from "@/components/ProcessFlowSection";
import TradingPartnersSection from "@/components/TradingPartnersSection";
import ERPIntegrationsSection from "@/components/ERPIntegrationsSection";
import EDITransactionsSection from "@/components/EDITransactionsSection";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <IntroductionSection />
      <EDIOverviewSection />
      <ConsultingServicesSection />
      <ProcessFlowSection />
      <TradingPartnersSection />
      <ERPIntegrationsSection />
      <EDITransactionsSection />
      <SubscribeSection />
      <Footer />
    </main>
  );
}
