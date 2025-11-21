import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import VillaShowcase from "../components/VillaShowcase";
import MansionShowcase from "../components/MansionShowcase";
import Contact from "../components/Contact";
import LastOne from "../components/LastOne";

export default function HomePage() {

  // IMAGE SLIDER
  const images = ["/home1.png", "/home2.png", "/home3.png", "/home4.png", "/home5.png"];
  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex(index === 0 ? images.length - 1 : index - 1);
  const nextSlide = () => setIndex(index === images.length - 1 ? 0 : index + 1);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative w-full h-[70vh] md:h-screen flex items-center justify-center"
        data-scroll-section
      >
        <img
          src={images[index]}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-20 text-center text-white px-4 max-w-3xl">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            data-scroll
            data-scroll-speed="1"
          >
            Classy Villas
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed"
            data-scroll
            data-scroll-speed="1.5"
          >
            At Classy Villas, luxury is defined by detail, artistry, and the
            experience of living well. Each villa is a sanctuary where elegance,
            comfort, and modern design meet in harmony.
          </p>
        </div>

        {/* SLIDER BUTTONS */}
        <button
          onClick={prevSlide}
          className="absolute bottom-6 left-6 md:left-10 z-30 bg-[#7ba9a7] p-5 rounded-full"
        >
          <ChevronLeft className="text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute bottom-6 right-6 md:right-10 z-30 bg-[#7ba9a7] p-5 rounded-full"
        >
          <ChevronRight className="text-white" />
        </button>
      </section>

      {/* DESCRIPTION */}
      <section
        className="py-16 px-6 md:px-20 text-center bg-black text-gray-300"
        data-scroll-section
      >
        <p className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed">
          Rooted in Chennai’s rich heritage, our spaces reflect refined taste
          and lasting value. For those who seek not just a home but a legacy —
          Classy Villas is where sophistication resides.
        </p>
      </section>

      {/* COMPONENT SECTIONS */}
      <section data-scroll-section>
        <VillaShowcase />
      </section>

      <section data-scroll-section>
        <MansionShowcase />
      </section>

      <section data-scroll-section>
        <Contact />
      </section>

      <section data-scroll-section>
        <LastOne />
      </section>
    </>
  );
}
