import React, { useState } from "react";
import "./App.css";
import { Landing } from "./pages/landing";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from "./pages/home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
    /** This is the current progress */
    // <div className="p-10">
    //   <header>
    //     <h1>Welcome to My Homepage</h1>
    //   </header>
    //   <div className="h-screen p-10 m-auto rounded-xl bg-gray-600 items-center overflow-clip content-between">
    //     <div className="relative justify-center p-5 m-auto">
    //       <Button variant="contained" color="primary">
    //         Add friend
    //       </Button>
    //     </div>
    //     <Searching/>
    //   </div>
    // </div>
  );
}

export default App;
