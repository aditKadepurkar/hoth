import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="justify-center w-full h-full p-20">
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="font-bold text-4xl mt-20">Login</h1>
        {/* Margin added to the top of the text fields */}
        <div className="mt-6">
          {/* First TextField */}
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            sx={{ width: "100%" }} // Make the text field 100% width
          />
        </div>
        <div className="mt-4">
          {/* Second TextField */}
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            sx={{ width: "100%" }} // Make the text field 100% width
          />
        </div>
        {/* Button with the text "Login" */}
        <div className="mt-6">
          {/* Wrap the Button with a Link component */}
          <Link to="/home">
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
