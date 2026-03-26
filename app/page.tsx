import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import LeadershipRoles from "@/components/LeadershipRoles";
import AdvisorySection from "@/components/advisorySection";
import PhilosopySection from "@/components/PhilosopySection";
import Footer from "@/components/Footer";
import TheSuperconnectorMethodSection from "@/components/TheSuperconnectorMethodSection";
import { aboutContent } from "@/data/aboutContent";
import { leadershipContent } from "@/data/leadershipContent";
import { AdvisoryContent } from "@/data/AdvisoryContent";
import { philosophyContent } from "@/data/philosophyContent";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] font-inter">
      <Navbar />
      <Hero />
      <AboutSection
        title={aboutContent.title}
        imageSrc={aboutContent.imageSrc}
        imageAlt={aboutContent.imageAlt}
        imageWidth={aboutContent.imageWidth}
        imageHeight={aboutContent.imageHeight}
        paragraphs={aboutContent.paragraphs}
      />
      <div className='hidden md:block h-16 bg-[#e8decd]'></div>
      <TheSuperconnectorMethodSection />
      <div className='hidden md:block h-16'></div>
      <LeadershipRoles
        title={leadershipContent.title}
        description={leadershipContent.description}
        roles={leadershipContent.roles}
        imageSrc={leadershipContent.imageSrc}
        imageAlt={leadershipContent.imageAlt}
        imageWidth={leadershipContent.imageWidth}
        imageHeight={leadershipContent.imageHeight}
      />
      <div className='hidden md:block h-16'></div>
      <AdvisorySection
        title={AdvisoryContent.title}
        subtitle={AdvisoryContent.subtitle}
        bulletPoints={AdvisoryContent.bulletPoints}
        paragraphs={AdvisoryContent.paragraphs}
        signature={AdvisoryContent.signature}
        buttonText={AdvisoryContent.buttonText}
        buttonLink={AdvisoryContent.buttonLink}
        imageSrc={AdvisoryContent.imageSrc}
        imageAlt={AdvisoryContent.imageAlt}
        imageWidth={AdvisoryContent.imageWidth}
        imageHeight={AdvisoryContent.imageHeight}
      />
      <div className='hidden md:block h-16'></div>
      <PhilosopySection
        title={philosophyContent.title}
        subtitle={philosophyContent.subtitle}
        headline={philosophyContent.headline}
        body={philosophyContent.body}
        imageSrc={philosophyContent.imageSrc}
        imageAlt={philosophyContent.imageAlt}
      />
      <Footer />
    </main>
  );
}
