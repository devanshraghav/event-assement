import React from "react";
import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
     
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
