import { create } from "zustand";
import axios from "axios";

export const useBookingStore = create((set, get) => ({
  bookings: [],
  selectedBooking: null,
  loading: false,
  error: null,
  success: false,

  // CREATE BOOKING
  createBooking: async (payload) => {
    set({ loading: true, error: null, success: false });

    try {
      const res = await axios.post("/api/bookings", payload);
      const newBooking = res.data;

      set((state) => ({
        bookings: [...state.bookings, newBooking],
        selectedBooking: newBooking,
        loading: false,
        success: true,
      }));

      return newBooking;
    } catch (err) {
      const msg = err.response?.data?.message || "Failed to create booking";
      set({ error: msg, loading: false });
      throw new Error(msg);
    }
  },

  // CANCEL BOOKING
  cancelBooking: async (id) => {
    set({ loading: true, error: null });

    try {
      await axios.delete(`/api/bookings/${id}`);

      set((state) => ({
        bookings: state.bookings.filter(b => b._id !== id),
        selectedBooking: null,
        loading: false,
        success: true,
      }));
    } catch (err) {
      const msg = err.response?.data?.message || "Failed to cancel booking";
      set({ error: msg, loading: false, success: false });
      throw new Error(msg);
    }
  },

  resetStatus: () => set({ success: false, error: null }),
}));


// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// export const useBookingStore = create(
//   persist(
//     (set, get) => ({
//       bookings: [],          // persisted safely
//       selectedBooking: null,
//       loading: false,
//       error: null,
//       success: false,

//       // CREATE BOOKING (with overlap check)
//   createBooking: async (payload) => {
//     // RESET previous error so toast can show again
//     set({ error: null, success: false });

//     const bookings = get().bookings;

//     const newStart = new Date(payload.checkIn);
//     const newEnd = new Date(payload.checkOut);

//     const conflict = bookings.some((b) => {
//       const start = new Date(b.checkIn);
//       const end = new Date(b.checkOut);
//       return newStart <= end && newEnd >= start;
//     });

//     if (conflict) {
//       const msg = "These dates are already booked.";
//       set({ error: msg, success: false });
//       throw new Error(msg);
//     }

//     const newBooking = {
//       ...payload,
//       _id: crypto.randomUUID(),
//       villaId: "single-villa-001",
//     };

//     const updated = [...bookings, newBooking];

//     set({
//       bookings: updated,
//       selectedBooking: newBooking,
//       success: true,
//       error: null,
//     });

//     return newBooking;
// },


//       // GET BOOKING BY ID
//       fetchBookingById: (id) => {
//         const booking = get().bookings.find((b) => b._id === id);
//         set({ selectedBooking: booking || null });
//       },

//       // CANCEL BOOKING
//       cancelBooking: (id) => {
//         const updated = get().bookings.filter((b) => b._id !== id);

//         set({
//           bookings: updated,
//           selectedBooking: null,
//         });
//       },

//       resetStatus: () => set({ success: false, error: null })
//     }),

//     {
//       name: "villa-bookings-storage", // <— UNIQUE key prevents overwrite issues
//     }
//   )
// );

