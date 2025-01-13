// Import necessary modules and components
import { useParams } from "react-router-dom"; // Hook to extract URL parameters
import "../styles/List.scss"; // Styling for the SearchPage component
import { useSelector, useDispatch } from "react-redux"; // Redux hooks for state management
import { setListings } from "../redux/state"; // Redux action to set the listings in state
import { useEffect, useState } from "react"; // React hooks for managing state and side effects
import Loader from "../components/Loader"; // Component to show a loading indicator
import Navbar from "../components/Navbar"; // Navbar component
import ListingCard from "../components/ListingCard"; // Component to display individual listing cards
import Footer from "../components/Footer"; // Footer component

const SearchPage = () => {
  // Local state to manage loading status
  const [loading, setLoading] = useState(true);

  // Extracting the search parameter from the URL
  const { search } = useParams();

  // Accessing the listings from the Redux store
  const listings = useSelector((state) => state.listings);

  // Initializing the dispatch function
  const dispatch = useDispatch();

  // Function to fetch listings based on the search query
  const getSearchListings = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/properties/search/${search}`, // API endpoint for search
        { method: "GET" }
      );

      const data = await response.json(); // Parse the JSON response
      dispatch(setListings({ listings: data })); // Update the Redux store with search results
      setLoading(false); // Set loading state to false
    } catch (err) {
      console.log("Fetch Search List failed!", err.message); // Log any errors
    }
  };

  // Fetch the search listings when the component mounts or when the search query changes
  useEffect(() => {
    getSearchListings();
  }, [search]); // Dependency array ensures this runs on `search` updates

  // Render the loader if data is still being fetched
  return loading ? (
    <Loader />
  ) : (
    <>
      {/* Render the Navbar */}
      <Navbar />

      {/* Display the search query as a title */}
      <h1 className="title-list">{search}</h1>

      {/* Container for the search results */}
      <div className="list">
        {/* Map through the listings and render a ListingCard for each */}
        {listings?.map(
          ({
            _id, // Unique ID of the listing
            creator, // Creator (host) of the listing
            listingPhotoPaths, // Array of listing photo paths
            city, // City of the listing
            province, // Province of the listing
            country, // Country of the listing
            category, // Category of the listing (e.g., apartment, house)
            type, // Type of listing (e.g., rental, sale)
            price, // Price of the listing
            booking = false, // Booking status (default is false)
          }) => (
            <ListingCard
              key={_id} // Unique key for React's rendering optimization
              listingId={_id} // Pass the listing ID as a prop
              creator={creator} // Pass the creator as a prop
              listingPhotoPaths={listingPhotoPaths} // Pass the photo paths as a prop
              city={city} // Pass the city as a prop
              province={province} // Pass the province as a prop
              country={country} // Pass the country as a prop
              category={category} // Pass the category as a prop
              type={type} // Pass the type as a prop
              price={price} // Pass the price as a prop
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

export default SearchPage;
