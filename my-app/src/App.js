import React from "react";
import logo from "./logo.svg";
import "./App.css";

// this sets up routing for the app
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import the components for each section of the page
import NavigationBar from "./components/NavigationBar.js";
import Content from "./components/Content.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    // the router component is the parent component for the app
    // the navigation bar is a child of the router, and is used to navigate between the different routes
    <Router>
      <NavigationBar>
        <Routes>
          <Route path="/home" element={<Content />} />
          <Route path="/read" element={<h1>Read Component</h1>} />
          <Route path="/create" element={<h1>Create Component</h1>} />
        </Routes>
      </NavigationBar>
    </Router>
  );
}

export default App;
