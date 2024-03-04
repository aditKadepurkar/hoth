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
    <div>
      <header>
        <h1>Welcome to My Homepage</h1>
      </header>
      <Link to="/profile">
        <Button variant="contained" color="primary">
          Profile Page
        </Button>
      </Link>
      <Link to="/">
        <Button variant="contained" color="primary">
          Log Out
        </Button>
      </Link>
      <section id="content">
        <h2>This is the home page content.</h2>
        <p>Welcome to my homepage! Feel free to explore.</p>
      </section>
    </div>
  );
}
