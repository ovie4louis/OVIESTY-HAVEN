// Import necessary components and icons from Material UI and other dependencies
import { IconButton } from "@mui/material"; // For clickable icons
import { Search, Person, Menu } from "@mui/icons-material"; // Icons used for search, profile, and menu
import variables from "../styles/variables.scss"; // Custom styles for variables (like colors)
import { useState } from "react"; // React hook to manage state
import { useSelector, useDispatch } from "react-redux"; // Redux hooks to manage and access global state
import "../styles/Navbar.scss"; // Custom styles for the Navbar component
import { Link, useNavigate } from "react-router-dom"; // React Router for navigation between pages
import { setLogout } from "../redux/state"; // Redux action for logging out the user

// Navbar component definition
const Navbar = () => {
  // State to manage dropdown menu visibility
  const [dropdownMenu, setDropdownMenu] = useState(false);

  // Accessing the user object from Redux store
  const user = useSelector((state) => state.user);

  // Redux dispatch function for state management
  const dispatch = useDispatch();

  // State for managing search input
  const [search, setSearch] = useState("")

  // UseNavigate hook for programmatic navigation
  const navigate = useNavigate()

  return (
    <div className="navbar">
      {/* Logo link */}
      <a href="/">
        <img src="/assets/logo.png" alt="logo" />
      </a>

      {/* Search bar section */}
      <div className="navbar_search">
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Update search state on input change
        />
        {/* Search icon button (disabled when search is empty) */}
        <IconButton disabled={search === ""}>
          <Search
            sx={{ color: variables.pinkred }} // Custom color for the search icon
            onClick={() => {navigate(`/properties/search/${search}`)}} // Navigate to search results page on click
          />
        </IconButton>
      </div>

      {/* Right side of the navbar */}
      <div className="navbar_right">
        {/* Show "Become A Host" link depending on user login status */}
        {user ? (
          <a href="/create-listing" className="host">
            Become A Host
          </a>
        ) : (
          <a href="/login" className="host">
            Become A Host
          </a>
        )}

        {/* Account button for dropdown menu */}
        <button
          className="navbar_right_account"
          onClick={() => setDropdownMenu(!dropdownMenu)} // Toggle dropdown menu visibility
        >
          <Menu sx={{ color: variables.darkgrey }} /> {/* Menu icon for dropdown */}
          {/* Display user profile picture or Person icon if not logged in */}
          {!user ? (
            <Person sx={{ color: variables.darkgrey }} />
          ) : (
            <img
              src={`http://localhost:3001/${user.profileImagePath.replace(
                "public",
                ""
              )}`}
              alt="profile photo"
              style={{ objectFit: "cover", borderRadius: "50%" }} // Display user's profile image with rounded corners
            />
          )}
        </button>

        {/* Dropdown menu options for non-logged in users */}
        {dropdownMenu && !user && (
          <div className="navbar_right_accountmenu">
            <Link to="/login">Log In</Link>
            <Link to="/register">Sign Up</Link>
          </div>
        )}

        {/* Dropdown menu options for logged-in users */}
        {dropdownMenu && user && (
          <div className="navbar_right_accountmenu">
            <Link to={`/${user._id}/trips`}>Trip List</Link>
            <Link to={`/${user._id}/wishList`}>Wish List</Link>
            <Link to={`/${user._id}/properties`}>Property List</Link>
            <Link to={`/${user._id}/reservations`}>Reservation List</Link>
            <Link to="/create-listing">Become A Host</Link>

            {/* Log out button */}
            <Link
              to="/login"
              onClick={() => {
                dispatch(setLogout()); // Dispatch the logout action
              }}
            >
              Log Out
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar; // Export Navbar component for use in other parts of the application
