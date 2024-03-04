import React from "react";
import Button from "@mui/material/Button"; // Corrected import statement
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <strong>Name:</strong> John Doe
      </div>
      <Link to="/home">
        <Button variant="contained" color="primary">
          Home
        </Button>
      </Link>
      <Link to="/">
        <Button variant="contained" color="primary">
          Log Out
        </Button>
      </Link>
      <div>
        <strong>Email:</strong> john.doe@example.com
      </div>
      {/* Add more profile information as needed */}
    </div>
  );
}
