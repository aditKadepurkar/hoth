import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";

export function Searching() {
    const [searchValue, setSearchValue] = useState("");
    const [searched, setSearched] = useState(false);
    const handleChange = (event) => {
      setSearchValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          console.log("Search submitted with value:", searchValue);
          
          setSearched(true);
          setTimeout(() => {
            setSearched(false);
          }, 1000);

        }
        // Perform any action with the search value here
    };

    useEffect(() => {
      // Perform any action with the search value here
      // This effect will run whenever the 'searched' state changes
      if (searched) {
          // Your logic for performing action after search
      }
  }, [searched]);

    if (!searched) {
      return (
        <div className="container">
        <TextField
          type="search"
          name="search"
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter location"
        />
      </div>
      );
    } else {
      <div className="container">
        <h1> Your friends have been notified! </h1>
      </div>
    }
}
