import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {useState} from "react"

export function Login() {
  const [username, updateUsername] = useState('');
  const [pass, passEnter] = useState('');

  const handleChangeUser = (event) => {
    updateUsername(event.target.value);
  };
  const handleChangePass = (event) => {
    passEnter(event.target.value);
  };

  // curl -X 'POST' \
  // 'http://127.0.0.1:8000/login?l1=bill&pw=1234' \
  // -H 'accept: application/json' \
  // -d ''

  async function login() {
    params = {"l1" : "bill", "pw" : "1234"}
    url = "http://127.0.0.1:8000/login"
    const res = await fetch(url, params)
    const data = JSON.parse(await res.json());
    console.log(data)
    return data;
  }

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
            onChange={handleChangeUser}
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
            onChange={handleChangePass}
            sx={{ width: "100%" }} // Make the text field 100% width
          />
        </div>
        {/* Button with the text "Login" */}
        <div className="mt-6">
          {/* Wrap the Button with a Link component */}
          <Link to="/home">
            <Button variant="contained" color="primary"
              onClick={login}
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
