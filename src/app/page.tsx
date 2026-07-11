import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import WorkProcess from "@/components/WorkProcess";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <Projects />
        <Testimonials />
        <TechStack />
        <WorkProcess />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
