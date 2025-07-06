import {
  Navigation,
  HeroSection,
  CompaniesSection,
  FeaturesSection,
  ModelPickerSection,
  NextEditSuggestionsSection,
  CodeReviewSection,
  PricingSection,
  IDESupportSection,
  FAQSection,
  Footer,
  BentoGrid,
} from "./components";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-black text-white font-['Mona_Sans']"
      data-color-mode="dark"
      data-dark-theme="dark"
    >
      <Navigation />
      <HeroSection />
      <CompaniesSection />
      <BentoGrid />
      <FeaturesSection />
      <ModelPickerSection />
      <NextEditSuggestionsSection />
      <CodeReviewSection />
      <PricingSection />
      <IDESupportSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
