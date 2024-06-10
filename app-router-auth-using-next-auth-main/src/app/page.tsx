import { getServerSession } from "next-auth";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import FeaturesHighlight from "./components/FeaturesHighlight";
import SamplePortfolios from "./components/SamplePortfolios";
import PricingPlans from "./components/PricingPlans";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default async function Home() {
  const session = await getServerSession();

  return (
    <>
      {session?.user?.name ? (
        <div>{session?.user?.name}</div>
      ) : (
        <div>Not logged in</div>
      )}
      <HeroSection headline={"PortfolioMaker.ai"} subheadline={"Turn your resume into a personalized portfolio website in just seconds"} ctaText={"Get Started"} />
      <HowItWorks/>
      <FeaturesHighlight/>
      <SamplePortfolios/>
      <PricingPlans />
      <FAQSection />
      <Footer />
    </>
  );
}
