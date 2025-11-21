import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VillaDetails from "./pages/VillaDetails";
import Login from "./pages/Login";
import OTP from "./pages/OTP";   // ⭐ IMPORT OTP PAGE
import BookingForm from "./pages/BookingForm";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import BookedDetail from "./pages/BookedDetail";
import ContactUs from "./pages/ContactUs";
import TeamsAndCareers from "./pages/TeamsAndCareers";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";
import Term from "./pages/Term";
import Guest from "./pages/Guest";
import Trust from "./pages/Trust";


export default function App() {
  const scrollRef = useRef(null);
  const loco = useRef(null);
  const location = useLocation();

  // Pages without navbar, footer, or locomotive scroll
  const noLayoutPages = ["/login", "/otp"];
  const hideLayout = noLayoutPages.includes(location.pathname);

  // Initialize LocomotiveScroll ONLY for main pages
  useEffect(() => {
    if (hideLayout) return;

    loco.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    return () => loco.current?.destroy();
  }, [hideLayout]);

  // Update scroll when route changes
useEffect(() => {
  if (hideLayout) return;

  // delay to ensure locomotive has rendered
  setTimeout(() => {
    if (loco.current) {
      loco.current.scrollTo(0, { duration: 0 });
    }
  }, 50);
}, [location, hideLayout]);

  return (
    <>
    <ScrollToTop />
      {/* SHOW NAVBAR ONLY WHEN NOT LOGIN/OTP PAGE */}
      {!hideLayout && <Navbar />}

      {hideLayout ? (
        /* LOGIN & OTP PAGES */
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<OTP />} /> {/* ⭐ ADDED */}
        </Routes>
      ) : (
        /* ALL NORMAL PAGES */
        <div ref={scrollRef} data-scroll-container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/detail" element={<VillaDetails />} />
            <Route path="/book" element={<BookingForm />} />
           <Route path="/booking-success" element={<BookedDetail />} />
           <Route path="/contact" element={<ContactUs />} />
           <Route path="/teams" element={<TeamsAndCareers />} />
           <Route path="/privacy" element={<Privacy />} />
           <Route path="/support" element={<Support />} />
           <Route path="/term" element={<Term />} />
           <Route path="/guest" element={<Guest />} />
           <Route path="/trust" element={<Trust />} />
          </Routes>

          {/* FOOTER */}
          <section data-scroll-section>
            <Footer />
          </section>
        </div>
      )}  
    <Toaster position="top-center" />
    </>
  );
}
