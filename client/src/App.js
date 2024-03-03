import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log("Search submitted with value:", searchValue);
    // Perform any action with the search value here
  };

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
        <TextField
          label="Search"
          variant="outlined"
          value={searchValue}
          onChange={handleSearchChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleSearchSubmit();
            }
          }}
        />
      </section>
    </div>
  );
}

export default App;
