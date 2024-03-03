import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Searching } from "./components/SearchingComp";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

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
        <Searching />
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Here is a gentle confirmation that your action was successful.
        </Alert>
      </section>
    </div>
  );
}

export default App;
