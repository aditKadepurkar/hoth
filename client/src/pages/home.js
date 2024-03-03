import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <header>
        <h1>Welcome to My Homepage</h1>
      </header>
      <Link to="/profile">
        <Button variant="contained" color="primary">
          Profile Page
        </Button>
      </Link>
      <Link to="/">
        <Button variant="contained" color="primary">
          Log Out
        </Button>
      </Link>
      <section id="content">
        <h2>This is the home page content.</h2>
        <p>Welcome to my homepage! Feel free to explore.</p>
      </section>
    </div>
  );
}
