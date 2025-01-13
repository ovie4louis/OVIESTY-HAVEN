// Import necessary modules and components
import { useEffect, useState } from "react"; // React hooks for managing state and side effects
import "../styles/List.scss"; // Stylesheet for the component
import Loader from "../components/Loader"; // Component to show a loading indicator
import Navbar from "../components/Navbar"; // Navbar component
import { useDispatch, useSelector } from "react-redux"; // Redux hooks for state management
import { setTripList } from "../redux/state"; // Redux action to set the trip list in the state
import ListingCard from "../components/ListingCard"; // Component to display individual trip details
import Footer from "../components/Footer"; // Footer component

const TripList = () => {
  // Local state to manage the loading status
  const [loading, setLoading] = useState(true);  

  // Extracting the user ID and trip list from the Redux store
  const userId = useSelector((state) => state.user._id); // User's unique ID
  const tripList = useSelector((state) => state.user.tripList); // List of user's trips

  // Initialize the dispatch function
  const dispatch = useDispatch();

  // Function to fetch the user's trip list
  const getTripList = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/users/${userId}/trips`, // API endpoint for fetching trips
        { method: "GET" }
      );

      const data = await response.json(); // Parse the JSON response
      dispatch(setTripList(data)); // Dispatch action to update the Redux store with trip data
      setLoading(false); // Set loading state to false
    } catch (err) {
      console.log("Fetch Trip List failed!", err.message); // Log any errors that occur
    }
  };

  // Fetch the trip list when the component mounts
  useEffect(() => {
    getTripList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this only runs once

  // Render the loader if data is still being fetched
  return loading ? (
    <Loader />
  ) : (
    <>
      {/* Render the Navbar */}
      <Navbar />

      {/* Display a title for the trip list */}
      <h1 className="title-list">Your Trip List</h1>

      {/* Container for displaying the trips */}
      <div className="list">
        {/* Map through the trip list and render a ListingCard for each trip */}
        {tripList?.map(
          ({ 
            listingId, // Information about the listing
            hostId, // Information about the host
            startDate, // Trip start date
            endDate, // Trip end date
            totalPrice, // Total price for the trip
            booking = true, // Booking status (default to true)
          }) => (
            <ListingCard
              key={listingId._id} // Unique key for React's rendering optimization
              listingId={listingId._id} // Pass the listing ID as a prop
              creator={hostId._id} // Pass the host ID as a prop
              listingPhotoPaths={listingId.listingPhotoPaths} // Pass listing photos as a prop
              city={listingId.city} // Pass the city as a prop
              province={listingId.province} // Pass the province as a prop
              country={listingId.country} // Pass the country as a prop
              category={listingId.category} // Pass the category as a prop
              startDate={startDate} // Pass the start date as a prop
              endDate={endDate} // Pass the end date as a prop
              totalPrice={totalPrice} // Pass the total price as a prop
              booking={booking} // Pass the booking status as a prop
            />
          )
        )}
      </div>

      {/* Render the Footer */}
      <Footer />
    </>
  );
};

export default TripList;
