import "../styles/Loader.scss";  // Importing the styling for the Loader component

// Loader functional component
const Loader = () => {
  return (
    <div className="loader">  {/* Outer container for the loader */}
      <div className="loader-inner"></div>  {/* Inner element that represents the loading animation */}
    </div>
  );
};

export default Loader;  // Exporting the Loader component for use in other parts of the app
