import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Wifi,
  Car,
  Snowflake,
  Tv,
  Wallet,
  Flame,
  Utensils,
  Plug,
  Brush
} from "lucide-react";

export default function VillaDetails() {
  const images = ["/image10.png", "/image11.png", "/image12.png", "/image13.png", "/image14.png"];
  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex(index === 0 ? images.length - 1 : index - 1);
  const nextSlide = () => setIndex(index === images.length - 1 ? 0 : index + 1);

  return (
    <>
      {/* HERO SECTION */}
      <section
        data-scroll-section
        className="relative w-full h-[70vh] md:h-screen flex items-center justify-center"
      >
        <img
          src={images[index]}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />

        <div className="absolute inset-0 bg-black/30" />

        <button
          onClick={prevSlide}
          className="absolute cursor-pointer bottom-10 left-6 md:left-10 z-30 bg-[#7ba9a7] p-5 rounded-full"
        >
          <ChevronLeft className="text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute cursor-pointer bottom-10 right-6 md:right-10 z-30 bg-[#7ba9a7] p-5 rounded-full"
        >
          <ChevronRight className="text-white" />
        </button>
      </section>

      {/* DETAILS SECTION */}
      <section data-scroll-section className="px-5 md:px-20 py-10 bg-black text-white">
        <h1 className="text-3xl font-bold">Townhouse Villa</h1>
        <p className="text-gray-300 text-xl mt-1">Near Old MLA Quarters, MG road, Chennai</p>

        {/* <div className="flex items-center gap-3 mt-3">
          <span className="bg-green-600 px-2 py-1 rounded text-sm font-semibold flex items-center gap-1">
            <Star size={14} className="text-white" /> 4.0
          </span>
          <span className="text-gray-400 text-md">(217 Rating)</span>
        </div> */}

        <div className="grid grid-cols-2 md:grid-cols-3 text-md md:text-xl gap-y-4 gap-x-6 mt-7 text-gray-200">
          <div className="flex items-center gap-2"><Car size={18} /> Parking facility</div>
          <div className="flex items-center gap-2"><Wifi size={18} /> Free Wifi</div>
          <div className="flex items-center gap-2"><Snowflake size={18} /> AC</div>
          <div className="flex items-center gap-2"><Utensils size={18} /> Kitchen</div>
          <div className="flex items-center gap-2"><Plug size={18} /> Power Backup</div>
          <div className="flex items-center gap-2"><Flame size={18} /> Geyser</div>
          <div className="flex items-center gap-2"><Wallet size={18} /> Card payment</div>
          <div className="flex items-center gap-2"><Tv size={18} /> TV</div>
          <div className="flex items-center gap-2"><Brush size={18} /> Daily Housekeeping</div>
        </div>

        <div className="mt-8">
          <div className="flex items-end gap-4">
            <p className="text-3xl font-bold">₹15000</p>
            <p className="text-gray-400 text-xl line-through">₹20000</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-3">About this Villa</h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Villa’s are designed around the lifestyle and expectations of modern travelers. Every aspect – from the interiors and amenities to the booking experience – has been thoughtfully crafted to offer comfort, convenience, style, and value.In these villa there are 3 Bed rooms, Kitchen, 3 Bathrooms, Peaceful balcony, and Hall with Super Interior
          </p>
        </div>
      </section>
    </>
  );
}








