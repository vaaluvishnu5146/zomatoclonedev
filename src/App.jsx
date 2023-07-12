import "./App.css";
import React, { useState, useEffect, useLayoutEffect } from "react";
import PriceCard from "./Components/PriceCard/PriceCard";
import Todo from "./Pages/Todo";
import Home from "./Pages/home";
import Aboutus from "./Pages/aboutus";
import Contactus from "./Pages/contactus";
import Shopping from "./Pages/shopping";
import { Routes, Route, Link } from "react-router-dom";
import Blog from "./Pages/blog";
import FormikForm from "./Pages/FormikForm";
import ListingPage from "./Pages/ListingPage";

// FUNCTIONAL COMPONENT
function App() {
  /**
   * useState is a hook
   * Hook is a functionmality that has been developed for Functional components
   * {Whatever the functionality is available in class component cannot be used inside the functinal component,
   * so to make all thise functionality available for Functional component Hooks has been introduced into react.}
   */
  const [pricing, setPricing] = useState([]);

  /**
   * LIFECYCLE METHOD
   */
  useEffect(() => {
    console.log("Effect");
    fetch("http://localhost:3000/mocks/pricing.json")
      .then((response) => response.json())
      .then((result) => {
        if (result.data) {
          setPricing(result.data);
        }
      });
  }, []);

  useLayoutEffect(() => {
    console.log("Layout Effect");
  }, []);

  return (
    <div className="App">
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Navbar</span>
          <ul className="nav">
            <Link to="/" className="nav-item">
              <p>Home</p>
            </Link>
            <Link to="/aboutus" className="nav-item">
              <p>About Us</p>
            </Link>
            <Link to="/contactus" className="nav-item">
              <p>Contact Us</p>
            </Link>
            <Link to="/shopping/mens-tshirt" className="nav-item">
              <p>Shopping</p>
            </Link>
            <Link to="/todo" className="nav-item">
              <p>Todo App</p>
            </Link>
            <Link to="/food" className="nav-item">
              <p>Food</p>
            </Link>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/aboutus" Component={Aboutus} />
        <Route path="/contactus" Component={Contactus} />
        <Route path="/shopping/:productCategory" Component={Shopping} />
        <Route path="/blog/:productCategory" Component={Blog} />
        <Route path="/todo" Component={Todo} />
        <Route path="/formik" Component={FormikForm} />
        <Route path="/food" Component={ListingPage} />
      </Routes>
    </div>
  );
}

export default App;
