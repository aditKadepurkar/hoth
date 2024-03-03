import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Searching } from "../components/SearchingComp";
import { Login } from "../components/LoginModal";

export function Landing() {

return (
    <div className="w-screen h-screen bg-gray-900">
      <div className="w-1/3 h-screen bg-white rounded-r-[20%]">
        <Login/>

      </div>


    </div>
    )
}