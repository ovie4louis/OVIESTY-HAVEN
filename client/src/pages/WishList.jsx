// Import the necessary modules and components
import "../styles/List.scss"; // Import the stylesheet for styling
import { useSelector } from "react-redux"; // Redux hook to access the store's state
import Navbar from "../components/Navbar"; // Navbar component for page navigation
import ListingCard from "../components/ListingCard"; // Component to display individual wish list items
import Footer from "../components/Footer"; // Footer component for the page

const WishList = () => {
  // Access the user's wish list from the Redux store
  const wishList = useSelector((state) => state.user.wishList);

  return (
    <>
      {/* Render the Navbar */}
      <Navbar />

      {/* Title for the Wish List page */}
      <h1 className="title-list">Your Wish List</h1>

      {/* Container for displaying the wish list items */}
      <div className="list">
        {/* Map through the wish list and render a ListingCard for each item */}
        {wishList?.map(
          ({
            _id, // Unique ID of the listing
            creator, // Information about the creator of the listing
            listingPhotoPaths, // Photo paths for the listing
            city, // City where the property is located
            province, // Province where the property is located
            country, // Country where the property is located
            category, // Category of the listing (e.g., apartment, house)
            type, // Type of the listing (e.g., rent, sale)
            price, // Price of the property
            booking = false, // Booking status (default to false)
          }) => (
            <ListingCard
              key={_id} // Unique key for React's rendering optimization
              listingId={_id} // Pass the listing ID as a prop
              creator={creator} // Pass the creator as a prop
              listingPhotoPaths={listingPhotoPaths} // Pass listing photos as a prop
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

export default WishList;
