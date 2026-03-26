import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PhilosopySection from "@/components/PhilosopySection";
import Footer from "@/components/Footer";
import { aboutContent } from "@/data/aboutContent";
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
