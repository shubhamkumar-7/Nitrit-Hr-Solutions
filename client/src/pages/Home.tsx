import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
