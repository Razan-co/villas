import { FaFacebookF, FaInstagram, FaTwitter, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-10 px-6 md:px-16">

      {/* --- TOP SECTION --- */}
      <div className="flex flex-col md:flex-row justify-around gap-12 md:gap-20">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Classy Villas Logo" 
            className="w-36 h-30 rounded-full"
          />
        </div>

        {/* LINKS SECTION */}
        <div className="grid grid-cols-2 gap-x-20 gap-y-5 md:gap-y-8">

          <div className="space-y-3 flex flex-col">
            <Link to={"/about"} className="cursor-pointer hover:text-white transition">About</Link>
            <Link to={"/teams"} className="cursor-pointer hover:text-white transition">Teams / Careers</Link>
            <Link to={"/support"} className="cursor-pointer hover:text-white transition">Support</Link>
          </div>

          <div className="space-y-3 flex flex-col">
            <Link to={"/term"} className="cursor-pointer hover:text-white transition">Terms & Conditions</Link>
            <Link to={"/guest"} className="cursor-pointer hover:text-white transition">Guest Policies</Link>
            <Link to={"/privacy"} className="cursor-pointer hover:text-white transition">Privacy Policies</Link>
            <Link to={"/trust"} className="cursor-pointer hover:text-white transition">Trust and safety</Link>
          </div>

        </div>

      </div>

      {/* --- DIVIDER --- */}
      <div className="w-full border-t border-gray-600 my-10"></div>

      {/* --- SOCIAL + COPYRIGHT --- */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <FaFacebookF className="cursor-pointer hover:text-white" />
          <FaInstagram className="cursor-pointer hover:text-white" />
          <FaTwitter className="cursor-pointer hover:text-white" />
          <FaPlay className="cursor-pointer hover:text-white" />
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm text-center md:text-right">
          2013-2022 © Classyvillas.com
        </p>

      </div>
    </footer>
  );
}
