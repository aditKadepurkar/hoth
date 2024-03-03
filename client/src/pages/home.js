import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <header>
        <h1>hello</h1>
      </header>
      <nav>
        <button id="home-link">Home</button>
        <button id="about-link">About</button>
        <button id="contact-link">Contact</button>
      </nav>
      <section id="content">
        <h2>This is the home page content.</h2>
        <p>Welcome to my homepage! Feel free to explore.</p>
      </section>
      <NavLink to="/about">Go to Home</NavLink>
    </div>
  );
}

export default Home;
