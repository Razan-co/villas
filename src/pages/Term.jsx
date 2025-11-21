import React from "react";

export default function Term() {
  return (
    <div data-scroll-section className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold">
          Terms and Condition
        </h1>

        {/* INTRO PARAGRAPH */}
        <p className="leading-relaxed text-gray-300 text-lg">
        Welcome to Classy Villas. By accessing or using our website and services, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully.
        </p>

        {/* SECTION 1 */}
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">1 Booking and Payment:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>All bookings are subject to availability and confirmation.</li>
            <li>Payment must be made according to the schedule provided at the time of booking.</li>
            <li>Prices may change due to seasonal fluctuations or special offers.</li>
          </ul>
        </div>

        {/* SECTION 2 */}
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">2 Cancellation and Refunds:</h2>

          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Cancellation policies vary per villa and are specified at the time of booking.</li>
            <li>Refunds, if applicable, will be processed according to the cancellation terms.</li>
          </ul>
        </div>

        {/* SECTION 3 */}
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">3 Guest Responsibility:</h2>

          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
           Guests are responsible for any damage caused to the property during their stay.
            </li>
            <li>
        Pets, parties, or events may only be allowed with prior written permission.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">4 Limitation of Liability:</h2>

          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
   Classy Villas is not responsible for personal injury, loss, or theft during the stay.
            </li>
            <li>
 We reserve the right to modify these terms at any time without prior notice.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
