import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Searching } from "./components/SearchingComp";

function App() {

  return (
    <div>
      <header>
        <h1>Welcome to My Homepage</h1>
      </header>
      <section id="content">
        <h2>This is the home page content.</h2>
        <p>Welcome to my homepage! Feel free to explore.</p>
        <Button variant="contained" color="primary">
          Add friend
        </Button>
        <Searching/>
      </section>
    </div>
  );
}

export default App;
