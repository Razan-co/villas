import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VillaDetails from "./pages/VillaDetails";
import BookingForm from "./pages/BookingForm";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import BookedDetail from "./pages/BookedDetail";
import TeamsAndCareers from "./pages/TeamsAndCareers";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";
import Term from "./pages/Term";
import Guest from "./pages/Guest";
import Trust from "./pages/Trust";
import VillaGallery from "./pages/VillaGallery";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<VillaGallery />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/detail" element={<VillaDetails />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/booking-success" element={<BookedDetail />} />
        <Route path="/teams" element={<TeamsAndCareers />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/term" element={<Term />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/trust" element={<Trust />} />
      </Routes>

      <Footer />

      <Toaster position="top-center" />
    </>
  );
}
