// Import custom styles for the Slide component
import "../styles/Slide.scss";

//for Slide component definition
const Slide = () => {
  return (
    // Main container for the slide section
    <div className="slide">
      {/* Heading element with text */}
      <h1>
        Welcome to OVIESTY HAVEN!  {/* Title of the slide */}
        Wherever you roam<br />  feel at home. {/* Subheading */}
        Stay in the moment. Create unforgettable memories. {/* Descriptive text */}
      </h1>
    </div>
  );
};

// Export the Slide component to be used in other parts of the application
export default Slide;
