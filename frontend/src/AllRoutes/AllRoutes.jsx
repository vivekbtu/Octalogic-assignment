import React from "react";
import { Routes, Route } from "react-router-dom";
import Bookings from "../components/viewBookingsPage/Bookings";
import BookingForm from "../components/BookingForm/BookingForm";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BookingForm />} />

        <Route path="/allbookings" element={<Bookings />} />
      </Routes>
    </>
  );
};

export default AllRoutes;