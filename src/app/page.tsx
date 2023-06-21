"use client";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Timeline from "./components/Timeline/Timeline";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Footer />
    </main>
  );
}
