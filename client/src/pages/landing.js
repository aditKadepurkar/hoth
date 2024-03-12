import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Searching } from "../components/SearchingComp";
import { Login } from "../components/LoginModal";

export function Landing() {

return (
    <div className="w-screen h-screen bg-gray-900">
      <div className="absolute w-1/3 h-screen bg-white">
        <Login/>

      </div>
      <div className="absolute right-0 w-2/3 h-screen z-10 flex justify-center items-center">
        <h1 className="text-8xl font-extrabold text-slate-900 font-mono">
          Lunch Bois
        </h1>
        <div className="absolute w-full h-full -z-10 bg-slate-500 blur-2xl"></div>
      </div>



    </div>
    )
}