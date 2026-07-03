"use client";

import "./Hero.css";

import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";
import MouseGlow from "./MouseGlow";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white flex items-center border-b border-blue-100"
    >
      {/* Mouse Glow */}
      <MouseGlow />

      {/* Background Blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      {/* Hero Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-16 flex items-center">

        {/* Left Side */}
        <div className="w-[58%]">
          <HeroContent />
          <HeroButtons />
        </div>

        {/* Right Side */}
        <div className="w-[42%] flex justify-end">
          <HeroImage />
          </div>

      </div>

      {/* Scroll Down */}
      <ScrollIndicator />
    </section>
  );
}