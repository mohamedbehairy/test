import React, { use, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
export default function Layout() {
  const [mode, setMode] = useState(localStorage.getItem("mode"));
  function changeMode(iconMode) {
    setMode(iconMode);
    localStorage.setItem("mode", iconMode);
  }
  return (
    <main className={`${mode == "dark" && "dark"} `}>
      <div className="bg-slate-300 dark:bg-slate-800 min-h-screen relative">
        <Navbar mode={mode} changeMode={changeMode} />
        <div className="mb-10 pt-17">
          <Outlet></Outlet>
        </div>
        <Footer />
      </div>
    </main>
  );
}
