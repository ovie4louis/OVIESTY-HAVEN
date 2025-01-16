import React from 'react';
// Importing necessary modules and components
import { useEffect, useState } from "react"; // React hooks for managing state and side effects
import "../styles/List.scss"; // Styles for the ReservationList component
import Loader from "../components/Loader"; // Loader component for displaying a loading indicator
import Navbar from "../components/Navbar"; // Navbar component
import { useDispatch, useSelector } from "react-redux"; // Redux hooks for state management
import { setReservationList } from "../redux/state"; // Redux action for updating reservation list
import ListingCard from "../components/ListingCard"; // Component to display individual reservation details
import Footer from "../components/Footer"; // Footer component

const ReservationList = () => {
  // Local state to manage the loading status
  const [loading, setLoading] = useState(true);

  // Accessing the user's ID and reservation list from Redux state
  const userId = useSelector((state) => state.user._id); // Get the user ID from Redux
  const reservationList = useSelector((state) => state.user.reservationList); // Get the reservation list from Redux

  const dispatch = useDispatch(); // Hook to dispatch Redux actions

  // Function to fetch the reservation list from the server
  const getReservationList = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/users/${userId}/reservations`, // API endpoint for fetching reservations
        { method: "GET" }
      );

      const data = await response.json(); // Parse the JSON response
      dispatch(setReservationList(data)); // Update the Redux store with the fetched data
      setLoading(false); // Set loading state to false
    } catch (err) {
      console.log("Fetch Reservation List failed!", err.message); // Error handling
    }
  };

  // Fetch reservation list when the component mounts
  useEffect(() => {
    getReservationList();
  }, []);

  // Render the loader while data is being fetched
  return loading ? (
    <Loader />
  ) : (
    <>
      {/* Render the Navbar */}
      <Navbar />

      {/* Page title */}
      <h1 className="title-list">Your Reservation List</h1>

      {/* Reservations container */}
      <div className="list">
        {/* Map through the reservation list to display each reservation */}
        {reservationList?.map(
          ({
            listingId, // ID of the listing associated with the reservation
            hostId, // ID of the host who owns the listing
            startDate, // Start date of the reservation
            endDate, // End date of the reservation
            totalPrice, // Total price for the reservation
            booking = true, // Booking status (default is true)
          }) => (
            <ListingCard
              key={listingId._id} // Key for React's rendering optimization
              listingId={listingId._id} // Pass the listing ID to the ListingCard component
              creator={hostId._id} // Host ID
              listingPhotoPaths={listingId.listingPhotoPaths} // Photo paths of the listing
              city={listingId.city} // City of the listing
              province={listingId.province} // Province of the listing
              country={listingId.country} // Country of the listing
              category={listingId.category} // Category of the listing
              startDate={startDate} // Start date of the reservation
              endDate={endDate} // End date of the reservation
              totalPrice={totalPrice} // Total price of the reservation
              booking={booking} // Booking status
            />
          )
        )}
      </div>

      {/* Render the Footer */}
      <Footer />
    </>
  );
};

export default ReservationList;
