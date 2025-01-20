// Importing necessary components from react-router-dom for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing global stylesheet
import "./App.css";

// Importing page components for routing
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateListing from "./pages/CreateListing";
import ListingDetails from "./pages/ListingDetails";
import TripList from "./pages/TripList";
import WishList from "./pages/WishList";
import PropertyList from "./pages/PropertyList";
import ReservationList from "./pages/ReservationList";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";

function App() {
  return (
    <div>
      {/* Wrapping the entire application in BrowserRouter to enable routing */}
      <BrowserRouter>
        <Routes>
          {/* Defining routes for different pages */}
          <Route path="/" element={<HomePage />} />  {/* Home page */}
          <Route path="/register" element={<RegisterPage />} />  {/* User registration page */}
          <Route path="/login" element={<LoginPage />} />  {/* User login page */}
          <Route path="/create-listing" element={<CreateListing />} />  {/* Page to create new property listings */}
          
          {/* Dynamic routes for properties */}
          <Route path="/properties/:listingId" element={<ListingDetails />} />  {/* Property details page */}
          <Route path="/properties/category/:category" element={<CategoryPage />} />  {/* Properties filtered by category */}
          <Route path="/properties/search/:search" element={<SearchPage />} />  {/* Search results for properties */}
          
          {/* User-specific routes */}
          <Route path="/:userId/trips" element={<TripList />} />  {/* User trip list */}
          <Route path="/:userId/wishList" element={<WishList />} />  {/* User wishlist */}
          <Route path="/:userId/properties" element={<PropertyList />} />  {/* User's listed properties */}
          <Route path="/:userId/reservations" element={<ReservationList />} />  {/* User's reservations */}
          
          {/* Static information pages */}
          <Route path="/About" element={<About />} />  {/* About page */}
          <Route path="/Terms" element={<Terms />} />  {/* Terms and conditions page */}
          <Route path="/Refund" element={<Refund />} />  {/* Refund policy page */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Exporting the App component for rendering
export default App;
