// Importing the Navbar component from the components folder
import Navbar from "../components/Navbar";

// Importing the Slide component from the components folder
import Slide from "../components/Slide";

// Importing the Categories component from the components folder
import Categories from "../components/Categories";

// Importing the Listings component from the components folder
import Listings from "../components/Listings";

// Importing the Footer component from the components folder
import Footer from "../components/Footer";

// Defining the HomePage functional component
const HomePage = () => {
  return (
    <>
      {/* Rendering the Navbar at the top of the page */}
      <Navbar />

      {/* Rendering the Slide component for showcasing images or banners */}
      <Slide />

      {/* Rendering the Categories section for grouping items */}
      <Categories />

      {/* Rendering the Listings section for displaying available items */}
      <Listings />

      {/* Rendering the Footer at the bottom of the page */}
      <Footer />
    </>
  );
};

// Exporting the HomePage component for use in other parts of the application
export default HomePage;
