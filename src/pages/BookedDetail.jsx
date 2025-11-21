import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBookingStore } from "../store/useBookingStore";
import toast from "react-hot-toast";

export default function BookedDetail() {
  const navigate = useNavigate();

  const {
    bookings,
    loading,
    error,
    fetchBookings,
    cancelBooking,
  } = useBookingStore();

  // Load all bookings when page opens
  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  // Handle cancel
  const handleCancel = async (id) => {
    try {
      await cancelBooking(id);
      toast.success("Booking cancelled");
      fetchBookings(); // refresh list after deletion
    } catch (err) {
      toast.error(err.message || "Unable to cancel booking");
    }
  };

  // UI states
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading bookings...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Error: {error}
      </div>
    );
  }

  if (!bookings || bookings.length === 0) {
    return (
      <div data-scroll-section className="md:min-h-screen h-[70vh] bg-black text-white flex items-center justify-center">
        No bookings found.
      </div>
    );
  }

  return (
    <div
      data-scroll-section
      className="md:min-h-screen h-[70vh] bg-black text-white pt-32 px-6 md:px-16"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        All Booked Details
      </h1>

      <div className="space-y-8 max-w-3xl">
        {bookings.map((b) => (
          <div key={b._id} className="bg-white/10 p-6 rounded-xl space-y-3">
            <p>
              <strong>Name:</strong> {b.fullName}
            </p>
            <p>
              <strong>Email:</strong> {b.email}
            </p>
            <p>
              <strong>Phone:</strong> {b.phone}
            </p>
            <p>
              <strong>Address:</strong> {b.address}
            </p>
            <p>
              <strong>Check-in:</strong> {b.checkIn}
            </p>
            <p>
              <strong>Check-out:</strong> {b.checkOut}
            </p>
            <p>
              <strong>Total Days:</strong> {b.days}
            </p>
            <p>
              <strong>Villa:</strong> {b.villaId}
            </p>

            <button
              onClick={() => handleCancel(b._id)}
              className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-md font-semibold text-white w-full"
            >
              Cancel Booking
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useBookingStore } from "../store/useBookingStore";
// import toast from "react-hot-toast";

// export default function BookedDetail() {
//   const navigate = useNavigate();
//   const { bookings, cancelBooking } = useBookingStore();

//   // If no bookings exist
//   if (!bookings || bookings.length === 0) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         No bookings found.
//       </div>
//     );
//   }

//   const handleCancel = (id) => {
//     cancelBooking(id);
//     toast.success("Booking cancelled");
//   };

//   return (
//     <div data-scroll-section className="min-h-screen bg-black text-white pt-32 px-6 md:px-16">
//       <h1 className="text-3xl md:text-4xl font-bold mb-6">All Booked Details</h1>

//       <div className="space-y-8 max-w-3xl">
//         {bookings.map((b) => (
//           <div key={b._id} className="bg-white/10 p-6 rounded-xl space-y-3">

//             <p><strong>Name:</strong> {b.fullName}</p>
//             <p><strong>Email:</strong> {b.email}</p>
//             <p><strong>Phone:</strong> {b.phone}</p>
//             <p><strong>Address:</strong> {b.address}</p>
//             <p><strong>Check-in:</strong> {b.checkIn}</p>
//             <p><strong>Check-out:</strong> {b.checkOut}</p>
//             <p><strong>Total Days:</strong> {b.days}</p>
//             <p><strong>Villa:</strong> {b.villaId}</p>

//             <button
//               onClick={() => handleCancel(b._id)}
//               className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-md font-semibold text-white w-full"
//             >
//               Cancel Booking
//             </button>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


