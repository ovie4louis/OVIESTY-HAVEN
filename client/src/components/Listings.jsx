import { useEffect, useState } from "react";  // Importing React hooks
import { categories } from "../data";  // Importing predefined categories from data file
import "../styles/Listings.scss";  // Importing the styling for the Listings component
import ListingCard from "./ListingCard";  // Importing the ListingCard component to display individual listings
import Loader from "./Loader";  // Importing a Loader component to show while listings are loading
import { useDispatch, useSelector } from "react-redux";  // Importing Redux hooks for managing global state
import { setListings } from "../redux/state";  // Importing the Redux action to set listings in the state


// Listings functional component
const Listings = () => {
  const dispatch = useDispatch();  // Initializing Redux dispatch to update global state
  const [loading, setLoading] = useState(true);  // State to manage loading status of listings
  const [selectedCategory, setSelectedCategory] = useState("All");  // State to manage the selected category filter

  const listings = useSelector((state) => state.listings);  // Fetching the listings from Redux state

  // Function to fetch listings based on the selected category
  const getFeedListings = async () => {
    try {
      const response = await fetch(
        selectedCategory !== "All"
          ? `http://localhost:3001/properties?category=${selectedCategory}`  // Fetch listings based on selected category
          : "http://localhost:3001/properties",  // Fetch all listings if no category is selected
        {
          method: "GET",
        }
      );

      const data = await response.json();  // Parse the response data
      dispatch(setListings({ listings: data }));  // Dispatch the action to update the Redux state with the listings
      setLoading(false);  // Set loading to false after data is fetched
    } catch (err) {
      console.log("Fetch Listings Failed", err.message);  // Log any errors that occur during the fetch
    }
  };

  

  // Fetch listings whenever the selected category changes
  useEffect(() => {
  getFeedListings();
}, [getFeedListings]);
  // Dependency array ensures this runs when selectedCategory changes

  return (
    <>
      {/* Category filter section */}
      <div className="category-list">
        {categories?.map((category, index) => (
          <div
            className={`category ${category.label === selectedCategory ? "selected" : ""}`}  // Highlight the selected category
            key={index}
            onClick={() => setSelectedCategory(category.label)}  // Update the selected category on click
          >
            <div className="category_icon">{category.icon}</div>  {/* Display the category icon */}
            <p>{category.label}</p>  {/* Display the category label */}
          </div>
        ))}
      </div>

      {/* Display loader if listings are still loading */}
      {loading ? (
        <Loader />  // Show loader while fetching data
      ) : (
        // Display listings if they have been fetched
        <div className="listings">
          {listings.map(
            ({
              _id,
              creator,
              listingPhotoPaths,
              city,
              province,
              country,
              category,
              type,
              price,
              booking = false,  // Default to 'false' if booking is not provided
            }) => (
              <ListingCard
                key={_id}  // Unique key for each listing
                listingId={_id}
                creator={creator}
                listingPhotoPaths={listingPhotoPaths}
                city={city}
                province={province}
                country={country}
                category={category}
                type={type}
                price={price}
                booking={booking}
              />
            )
          )}
        </div>
      )}
    </>
  );
};

export default Listings;  // Export the Listings component for use in other parts of the app
