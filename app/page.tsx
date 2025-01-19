import HeroSection from "@/components/Hero/Hero";
import TapeSection from "@/components/Tape/Tape";
import AboutSection from "@/components/About/About";
import ThemeMode from "@/components/Theme/ThemeMode";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <TapeSection />
      <AboutSection />
      <ThemeMode />
    </main>
  );
}
