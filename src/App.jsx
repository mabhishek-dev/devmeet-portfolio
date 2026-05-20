import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Analytics } from "@vercel/analytics/react";

// Layout Components
import NoiseOverlay from "./components/layout/NoiseOverlay";
import AmbientBlobs from "./components/layout/AmbientBlobs";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Section Components
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Robust scroll-to-top on refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const forceScroll = () =>
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    forceScroll();

    const handleBeforeUnload = () => {
      forceScroll();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Fallback for React mounting edge cases
    const timeout = setTimeout(forceScroll, 50);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="bg-background min-h-screen text-primary selection:bg-accent/20 relative">
      <AmbientBlobs />
      <NoiseOverlay />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
