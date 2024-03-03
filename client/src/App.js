import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Welcome to My Homepage</h1>
      </header>
      <nav>
        <a href="#" id="home-link">
          Home
        </a>
        <a href="#" id="about-link">
          About
        </a>
        <a href="#" id="contact-link">
          Contact
        </a>
      </nav>
      <section id="content">
        <h2>This is the home page content.</h2>
        <p>Welcome to my homepage! Feel free to explore.</p>
      </section>
    </div>
  );
}

export default App;
