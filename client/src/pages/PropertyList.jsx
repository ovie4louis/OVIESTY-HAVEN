// Importing necessary modules and components
import "../styles/List.scss"; // Styles for the PropertyList component
import { useDispatch, useSelector } from "react-redux"; // Hooks for managing state with Redux
import Navbar from "../components/Navbar"; // Navbar component
import ListingCard from "../components/ListingCard"; // Component to display individual property cards
import { useEffect, useState } from "react"; // React hooks
import { setPropertyList } from "../redux/state"; // Redux action to update the property list
import Loader from "../components/Loader"; // Loader component for loading state
import Footer from "../components/Footer"; // Footer component

const PropertyList = () => {
  // State to manage the loading status
  const [loading, setLoading] = useState(true);

  // Accessing the user state from Redux
  const user = useSelector((state) => state.user);
  const propertyList = user?.propertyList; // List of properties associated with the user
  console.log(user); // Debugging: Log user data to the console

  const dispatch = useDispatch(); // Hook to dispatch Redux actions

  // Function to fetch the property list from the server
  const getPropertyList = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/users/${user._id}/properties`, // API endpoint for fetching user properties
        { method: "GET" }
      );

      const data = await response.json(); // Parse the JSON response
      console.log(data); // Debugging: Log fetched property data
      dispatch(setPropertyList(data)); // Update the Redux store with fetched data
      setLoading(false); // Set loading state to false
    } catch (err) {
      console.log("Fetch all properties failed", err.message); // Error handling
    }
  };

  // Fetch property list when the component mounts
  useEffect(() => {
    getPropertyList();
  }, []);

  // Render the loader while data is being fetched
  return loading ? (
    <Loader />
  ) : (
    <>
      {/* Render the Navbar */}
      <Navbar />
      
      {/* Page title */}
      <h1 className="title-list">Your Property List</h1>

      {/* Property list container */}
      <div className="list">
        {propertyList?.map(
          ({
            _id, // Unique ID of the property
            creator, // Creator/owner of the property
            listingPhotoPaths, // Array of property photo paths
            city, // City where the property is located
            province, // Province/region where the property is located
            country, // Country where the property is located
            category, // Category of the property (e.g., apartment, house)
            type, // Type of property (e.g., rental, sale)
            price, // Price of the property
            booking = false, // Whether the property is currently booked
          }) => (
            <ListingCard
              key={_id} // Key for React's rendering optimization
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

      {/* Render the Footer */}
      <Footer />
    </>
  );
};

export default PropertyList;
