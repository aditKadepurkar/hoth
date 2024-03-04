import React from "react";
import { Login } from "../components/LoginModal";

// async function getData() {
//   const res = await fetch("http://0.0.0.0:7000/");
//   const data = JSON.parse(await res.json());
//   return data;
// }

export async function Home() {
  // const user = await getData()
  return (
      <div className="w-screen h-screen bg-gray-900">
        <div className="w-1/3 h-screen bg-white rounded-r-[20%]">
        <Login/>
          <div className="">
            {/* PFP */}
          </div>
          <div>
            {/* User DATA */}
          </div>
        </div>
  
  
      </div>
      )
  }
