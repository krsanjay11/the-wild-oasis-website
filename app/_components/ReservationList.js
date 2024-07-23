"use client";

import { useOptimistic } from "react"; // manual import

import ReservationCard from "./ReservationCard";
import { deleteBooking } from "../_lib/actions";

function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    }
  ); // currentState - this a value that is going to return in the beginning and while there is no asyncrohronous action running or no server action is pending, stateUpdateFunction - it determined the next optimitic state

  async function handledelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteBooking(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          onDelete={handledelete}
          key={booking.id}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
