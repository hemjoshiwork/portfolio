import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#171923] flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Services />
        <Process />
        <Skills />
        <About />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
