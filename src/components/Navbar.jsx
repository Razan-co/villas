import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function Navbar() {
  const [open, setOpen] = useState(false);          // Mobile menu
  const [profileOpen, setProfileOpen] = useState(false); // Profile dropdown

  const navigate = useNavigate();
  const { isAuthenticated,fullName, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex items-center justify-between h-16">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Classy Villas Logo" 
            className="w-24 h-20 rounded-full"
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-12 text-lg font-medium">
          <li><Link to="/" className="hover:text-gray-300 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300 transition">About Us</Link></li>
          <li><Link to="/support" className="hover:text-gray-300 transition">Support</Link></li>
        </ul>

        {/* RIGHT SIDE DESKTOP */}
        {!isAuthenticated ? (
          <Link
            to={"/login"}
            className="hidden md:block bg-[#8BB6B1] text-black px-6 py-2 rounded-xl text-lg font-semibold hover:opacity-80"
          >
            Login
          </Link>
        ) : (
          <div className="relative hidden md:block">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 bg-[#8BB6B1] text-black px-5 py-2 rounded-xl font-semibold"
            >
              <User size={20} />
              {fullName || "Profile"}
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-xl overflow-hidden">
                <Link to="/booking-success" className="block px-4 py-2 hover:bg-gray-200">
                  Booking
                </Link>

                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

        {/* MOBILE ICONS (MENU + PROFILE) */}
        <div className="flex items-center gap-4 md:hidden">

          {/* PROFILE ICON (MOBILE) */}
          {isAuthenticated && (
            <button onClick={() => setProfileOpen(!profileOpen)}>
              <User size={26} />
            </button>
          )}

          {/* MENU ICON */}
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV MENU */}
   {open && (
  <div className="md:hidden bg-black text-center pb-4 space-y-4 text-lg font-medium flex flex-col items-center">
    <Link to="/" className="hover:text-gray-300 py-2">Home</Link>
    <Link to="/about" className="hover:text-gray-300 py-2">About Us</Link>
    <Link to="/support" className="hover:text-gray-300 py-2">Support</Link>

    {!isAuthenticated && (
      <Link
        to="/login"
        className="bg-[#8BB6B1] text-black px-6 py-2 rounded-xl font-semibold mt-2"
      >
        Login
      </Link>
    )}
  </div>
)}

      {/* MOBILE PROFILE DROPDOWN */}
      {profileOpen && (
        <div className="md:hidden bg-black text-center pb-6 space-y-4 text-lg font-medium flex flex-col items-center border-t border-white/10">

          <Link to="/booking-success" className="hover:text-gray-300 py-2">
            Booking
          </Link>

          <button
            onClick={handleLogout}
            className="w-40 bg-red-500 px-6 py-2 rounded-xl text-white font-semibold"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
