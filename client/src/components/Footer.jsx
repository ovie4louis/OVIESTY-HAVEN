import "../styles/Footer.scss";  // Importing the styling for the footer component
import { Twitter, Facebook, Instagram, LocationOn, LocalPhone, Email } from "@mui/icons-material"  // Importing icons for location, phone, and email

// Footer functional component
const Footer = () => {
  return (
    <div className="footer">  {/* Main container for the footer */}
      
      {/* Left section with the company logo */}
      <div className="footer_left">
        <a href="/">  {/* Link to the homepage */}
          <img src="/assets/logo.png" alt="Company Logo" />  {/* Company logo */}
        </a>
       
      </div>
      <div>
         <img src="/assets/payment.png" alt="Payment methods" /> 
      </div>

      {/* Center section with useful links */}
      <div className="footer_center">
        <h3>Useful Links</h3>  {/* Title for the links section */}
        <ul>
          <li><a href="/about">About Us</a></li>  {/* Link to the "About Us" page */}
          <li><a href="/terms">Terms and Conditions</a></li>  {/* Link to the "Terms and Conditions" page */}
          <li><a href="/refund">Return and Refund Policy</a></li>  {/* Link to the "Return and Refund Policy" page */}
        </ul>
      </div>

      {/* Right section with contact information */}
      <div className="footer_right">
        <h3>Contact</h3>  {/* Title for the contact section */}
        
        {/* Phone contact information */}
        <div className="footer_right_info">
          <LocalPhone />  {/* Phone icon */}
          <ul>
           
              <a href="tel:+2348030564274">08030564274</a>  {/* Phone number link */}
            
           
          </ul>
        </div>
        
        {/* Email contact information */}
        <div className="footer_right_info">
          <Email />  {/* Email icon */}
          <ul>
          
              <a href="mailto:enakarhireovie7@gmail.com">enakarhireovie7@gmail.com</a>  {/* Email link */}
           
            
          </ul> 
        </div>
        
      
         {/* Phone contact information */}
        <div className="footer_right_info">
          <LocalPhone />  {/* Phone icon */}
          <ul>
              <a href="tel:+2348037637861">08037637861</a>  {/* Another phone number link */}
            
          </ul>
        </div>
        
        {/* Email contact information */}
        <div className="footer_right_info">
          <Email />  {/* Email icon */}
          <ul>
            
              <a href="mailto:christyjames938@yahoo.com">christyjames938@yahoo.com</a>  {/* Another email link */}
           
          </ul> 
        </div>
        
        {/* Social media icons */}  
         <div className="footer_right_info">
         <div>
           <LocationOn />  {/* Location icon */}
          </div>
        <div >
          <Twitter />  {/* Twitter icon */}
        </div>
       <div>
         <Instagram />  {/* Instagram icon */}
        </div>
        <Facebook />  {/* Facebook icon */}

      

        </div>

       
      </div>
      
    </div>
  );
};

export default Footer; 