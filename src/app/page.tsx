import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { FrameworkSection } from "@/components/sections/framework";
import { RegisterSection } from "@/components/sections/glance";
import { HeroSection } from "@/components/sections/hero";
import { SubsidiaryShowcase } from "@/components/sections/subsidiary-showcase";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <RegisterSection />
        <SubsidiaryShowcase />
        <FrameworkSection />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
