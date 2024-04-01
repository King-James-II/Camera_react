import React from "react";
import { navStyle } from "./styles.jsx"; // Import CSS styles
import {Link} from "react-router-dom"; // Import Link component from react-router-dom

// Define the Navigation component
const Navigation = (props) => {
  return (
    <nav style={navStyle.nav}> {/* Navigation bar */}
      {/* Links to different pages */}
      <Link to="/">
        <button style={navStyle.navLink}>Home</button>
      </Link>
      <Link to="/aperture">
        <button style={navStyle.navLink}>Aperture</button>
      </Link>
      <Link to="/shutterspeed">
        <button style={navStyle.navLink}>Shutter Speed</button>
      </Link>
      <Link to="/iso">
        <button style={navStyle.navLink}>ISO</button>
      </Link>
    </nav>
  );
};

export default Navigation; // Export the Navigation component
