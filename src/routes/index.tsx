import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Facilities } from "@/components/sections/Facilities";
import { Academic } from "@/components/sections/Academic";
import { Gallery } from "@/components/sections/Gallery";
import { LocationMap } from "@/components/sections/LocationMap";
import { Footer } from "@/components/sections/Footer";
import { Chatbot } from "@/components/Chatbot";
import { SplashScreen } from "@/components/SplashScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart School Dashboard · UPT SD Negeri 060851 Medan" },
      { name: "description", content: "Platform digital resmi UPT SD Negeri 060851 Medan — profil, fasilitas, sejarah sejak 1910, dan asisten AI sekolah." },
      { property: "og:title", content: "UPT SD Negeri 060851 — Smart School Dashboard" },
      { property: "og:description", content: "Modern · Edukatif · Inspiratif · Berkarakter. Jelajahi sekolah secara digital." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative bg-background text-foreground overflow-x-hidden">
      <SplashScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Facilities />
        <Academic />
        <Gallery />
        <LocationMap />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
