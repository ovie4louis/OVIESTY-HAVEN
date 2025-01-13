// Import necessary hooks and styles
import { useEffect, useState } from "react"; // React hooks for state management and lifecycle
import { useNavigate } from "react-router-dom"; // For navigation to other routes
import "../styles/Register.scss"; // Stylesheet for the Register Page

const RegisterPage = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "", // User's first name
    lastName: "", // User's last name
    email: "", // User's email
    password: "", // User's password
    confirmPassword: "", // To confirm password match
    profileImage: null, // User's profile image
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "profileImage" ? files[0] : value, // Handle file input for profile image
    });
  };

  // State to track if passwords match
  const [passwordMatch, setPasswordMatch] = useState(true);

  // Effect to validate password match whenever password fields change
  useEffect(() => {
    setPasswordMatch(
      formData.password === formData.confirmPassword ||
        formData.confirmPassword === "" // Match is valid if confirmPassword is empty
    );
  }, [formData.password, formData.confirmPassword]);

  // Hook for navigation
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const register_form = new FormData(); // Create FormData for file upload

      // Append all form data to FormData object
      for (const key in formData) {
        register_form.append(key, formData[key]);
      }

      // Send registration data to the backend
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        body: register_form, // Send FormData as the body
      });

      // Navigate to the login page on successful registration
      if (response.ok) {
        navigate("/login");
      }
    } catch (err) {
      console.log("Registration failed", err.message); // Log any errors
    }
  };

  return (
    <div className="register">
      <div className="register_content">
        {/* Registration Form */}
        <form className="register_content_form" onSubmit={handleSubmit}>
          {/* Input for First Name */}
          <input
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {/* Input for Last Name */}
          <input
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {/* Input for Email */}
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {/* Input for Password */}
          <input
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            required
          />
          {/* Input for Confirm Password */}
          <input
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            type="password"
            required
          />

          {/* Show error if passwords don't match */}
          {!passwordMatch && (
            <p style={{ color: "red" }}>Passwords do not match!</p>
          )}

          {/* File input for profile image */}
          <input
            id="image"
            type="file"
            name="profileImage"
            accept="image/*"
            style={{ display: "none" }} // Hide default file input
            onChange={handleChange}
            required
          />
          {/* Label for the hidden file input */}
          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="Add Profile" />
            <p>Upload Your Photo</p>
          </label>

          {/* Preview of the uploaded profile image */}
          {formData.profileImage && (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="Profile Preview"
              style={{ maxWidth: "80px" }}
            />
          )}

          {/* Submit button */}
          <button type="submit" disabled={!passwordMatch}>
            REGISTER
          </button>
        </form>
        {/* Link to login page */}
        <a href="/login">Already have an account? Log In Here</a>
      </div>
    </div>
  );
};

export default RegisterPage;
