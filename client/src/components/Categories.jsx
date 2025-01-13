// Import necessary modules and styles
import { categories } from "../data"; // Import category data (you would need to have this file with data)
import "../styles/Categories.scss"; // Import custom styles for categories
import { Link } from "react-router-dom"; // Import Link from react-router for navigation


const Categories = () => {
  return (
    <div className="categories">
      {/* Section header and description */}
      <h1>Explore Top Categories</h1>
      <p>
        Discover an exceptional selection of vacation rentals tailored to suit every kind of traveler. 
        Experience the charm of local culture, relax in the comfort of a home away from home, and make lasting 
        memories in your perfect getaway destination.
      </p>

      {/* List of categories */}
      <div className="categories_list">
        {/* Iterate through the categories array (slice to show only 6 items) */}
        {categories?.slice(1, 7).map((category, index) => (
          <Link to={`/properties/category/${category.label}`} key={index}> {/* Link to category-specific page */}
            <div className="category">
              <img src={category.img} alt={category.label} /> {/* Category image */}
              <div className="overlay"></div> {/* Overlay for styling */}
              <div className="category_text">
                <div className="category_text_icon">{category.icon}</div> {/* Category icon */}
                <p>{category.label}</p> {/* Category label */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
