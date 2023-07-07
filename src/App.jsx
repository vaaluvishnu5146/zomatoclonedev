import "./App.css";
import React, { useState, useEffect, useLayoutEffect } from "react";
import PriceCard from "./Components/PriceCard/PriceCard";
import Todo from "./Pages/Todo";
import Home from "./Pages/home";
import Aboutus from "./Pages/aboutus";
import Contactus from "./Pages/contactus";
import Shopping from "./Pages/shopping";
import { Routes, Route, NavLink } from "react-router-dom";
import Blog from "./Pages/blog";
import Learning from "./Pages/learning";

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
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "link active-link" : "link"
              }
            >
              <p>Home</p>
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "link active-link" : "link"
              }
            >
              <p>About Us</p>
            </NavLink>
            <NavLink
              to="/contactus"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "link active-link" : "link"
              }
            >
              <p>Contact Us</p>
            </NavLink>
            <NavLink
              to="/shopping/mens-tshirt"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "link active-link" : "link"
              }
            >
              <p>Shopping</p>
            </NavLink>
            <NavLink
              to="/todo"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "link active-link" : "link"
              }
            >
              <p>Todo App</p>
            </NavLink>
            <NavLink
              to="/learn"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "link active-link" : "link"
              }
            >
              <p>Learn</p>
            </NavLink>
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
        <Route path="/learn" Component={Learning} />
      </Routes>
    </div>
  );
}

export default App;
