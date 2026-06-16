import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { GlanceSection } from "@/components/sections/glance";
import { HeroSection } from "@/components/sections/hero";
import { ProcessSection } from "@/components/sections/process";
import { SocialProofSection } from "@/components/sections/social-proof";
import { SubsidiaryShowcase } from "@/components/sections/subsidiary-showcase";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <GlanceSection />
        <SubsidiaryShowcase />
        <ProcessSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
