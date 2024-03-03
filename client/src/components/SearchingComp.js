import TextField from "@mui/material/TextField";
import React, { useState } from "react";

export function Searching() {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearchSubmit = () => {
        console.log("Search submitted with value:", searchValue);
        // Perform any action with the search value here
    };
    return (
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
    );
}
