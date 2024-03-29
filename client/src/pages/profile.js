import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export function Profile() {
  return (
    <div className="relative">
      <div className="w-screen h-screen bg-gray-900">
        <div className="absolute inset-0 w-1/3 bg-white"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div className="flex justify-start">
          <Link to="/home" className="mr-4">
            <Button variant="contained" color="primary">
              Home
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              alt="User Avatar"
              src="/photo1.jpg"
              sx={{ width: 200, height: 200 }}
            />
          </Stack>
        </div>
        <div className="flex justify-end">
          <Link to="/" className="absolute top-4 right-4">
            <Button variant="contained" color="primary">
              Log Out
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
