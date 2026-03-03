import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[color:var(--app-fg)]">
      <Navbar />
      <main className="flex-1 py-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout