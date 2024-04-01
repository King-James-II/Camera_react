import React from "react";
import ReactDOM from "react-dom";
import { Home, Aperture, ShutterSpeed, ISO } from "./pages.jsx"; // Import page components
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route from react-router-dom
import Navigation from "./navigation.jsx"; // Import Navigation component
import { wrapperStyle } from "./styles.jsx"; // Import CSS styles

// Define the main App component
const App = () => {
  return (
    <BrowserRouter> {/* BrowserRouter to handle routing */}
      <div style={wrapperStyle.wrapper}> {/* Main wrapper with custom style */}
        <Navigation /> {/* Navigation component */}
        <h1>Camera Tips</h1> {/* Page title */}
        <Routes> {/* Define routes for different pages */}
          <Route exact path="/" element={<Home />} /> {/* Route to Home page */}
          <Route exact path="/aperture" element={<Aperture />} /> {/* Route to Aperture page */}
          <Route exact path="/shutterspeed" element={<ShutterSpeed />} /> {/* Route to ShutterSpeed page */}
          <Route exact path="/iso" element={<ISO />} /> {/* Route to ISO page */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

// Render the App component into the root element
ReactDOM.render(<App />, document.getElementById("root"));

export default App; // Export the App component
