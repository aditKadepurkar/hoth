import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Searching } from "./components/SearchingComp";

function App() {

  return (
    <div className="p-10">
      <header>
        <h1>Welcome to My Homepage</h1>
      </header>
      <div className="h-screen p-10 rounded-xl bg-gray-600 items-center overflow-clip content-between">
        <div className="relative justify-center">
          <Button variant="contained" color="primary">
            Add friend
          </Button>
        </div>
        <Searching/>
      </div>
    </div>
  );
}

export default App;
