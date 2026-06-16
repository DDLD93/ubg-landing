import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { GlanceSection } from "@/components/sections/glance";
import { HeroSection } from "@/components/sections/hero";
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
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
