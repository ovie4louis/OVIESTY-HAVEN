// Import necessary modules and components from React, Redux, and React Router
import React, { useState } from "react"; // React and useState for managing component state
import "../styles/Login.scss"; // Importing custom SCSS styles for the login page
import { setLogin } from "../redux/state"; // Action creator for login state management
import { useDispatch } from "react-redux"; // Hook to dispatch Redux actions
import { useNavigate } from "react-router-dom"; // Hook for navigation

// LoginPage component definition
const LoginPage = () => {
  // State for email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Initialize Redux dispatch
  const dispatch = useDispatch();

  // Initialize navigation function
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Make a POST request to the login API
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
        },
        body: JSON.stringify({ email, password }), // Send email and password as request body
      });

      // Parse the response JSON
      const loggedIn = await response.json();

      // If login is successful, dispatch login data and navigate to the home page
      if (loggedIn) {
        dispatch(
          setLogin({
            user: loggedIn.user, // Save user data
            token: loggedIn.token, // Save authentication token
          })
        );
        navigate("/"); // Redirect to the home page
      }
    } catch (err) {
      // Log an error message if the request fails
      console.log("Login failed", err.message);
    }
  };

  // Render the login page
  return (
    <div className="login">
      <div className="login_content">
        <form className="login_content_form" onSubmit={handleSubmit}>
          {/* Input for email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state on change
            required
          />
          {/* Input for password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state on change
            required
          />
          {/* Submit button */}
          <button type="submit">LOG IN</button>
        </form>
        {/* Link to registration page */}
        <a href="/register">Don't have an account? Sign In Here</a>
      </div>
    </div>
  );
};

// Export the LoginPage component for use in other parts of the application
export default LoginPage;
