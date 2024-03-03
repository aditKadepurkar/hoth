import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Searching } from "./components/SearchingComp";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route from react-router-dom
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to My Homepage</h1>

        {/* Use Routes component instead of Route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <section id="content">
          <h2>This is the home page content.</h2>
          <p>Welcome to my homepage! Feel free to explore.</p>
          <Button variant="contained" color="primary">
            Add friend
          </Button>
          <Searching />
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Here is a gentle confirmation that your action was successful.
          </Alert>
        </section> */}
      </div>
    </Router>
  );
}

export default App;
