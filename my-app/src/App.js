import logo from "./logo.svg";
import "./App.css";

//
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import the components for each section of the page
import NavigationBar from "./components/NavigationBar.js";
import Content from "./components/Content.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    // show each component on the page, within a div
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
