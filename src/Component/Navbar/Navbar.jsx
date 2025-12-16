import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ mode, changeMode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="shadow-2xl px-5 py-3 bg-slate-100 dark:bg-slate-900 dark:text-slate-50 ">
        <div className="container flex justify-between">
          <div className="left flex items-center">
            <div className="logo sm:order-first order-last">
              <h1 className="text-2xl font-bold">
                <NavLink to={""}>Moon</NavLink>
              </h1>
            </div>
            <div className="links lg:ml-24 md:ml-15 ml-5">
              <ul className="sm:flex hidden lg:space-x-12 md:space-x-6 space-x-2">
                <li>
                  <NavLink
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    to={""}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    to={"/about"}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    to={"/products"}
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    to={"/gallery"}
                  >
                    Gallery
                  </NavLink>
                </li>
              </ul>
            </div>
            <svg
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 sm:hidden block mr-2  cursor-pointer duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="right flex gap-x-10">
            <div className="btns space-x-4 sm:block hidden">
              <button className="btn bg-blue-100 hover:bg-blue-400 dark:bg-blue-700 dark:hover:bg-blue-900 ">
                Sign in
              </button>
              <button className="btn bg-blue-400 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-700">
                Sign up
              </button>
            </div>
            <div className="icon-mode cursor-pointer self-center text-gray-950 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-400 dark:text-amber-50 dark:hover:text-gray-800 p-2 rounded-full transition-all duration-350">
              {mode == "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                  onClick={() => {
                    changeMode("light");
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => {
                    changeMode("dark");
                  }}
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
        {isOpen && (
          <ul className="container px-6 py-4 space-y-3 sm:hidden">
            <li>
              <NavLink
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                to={""}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                to={"/products"}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                to={"/gallery"}
              >
                Gallery
              </NavLink>
            </li>

            <div className="btns space-x-4">
              <button className="btn bg-blue-100 hover:bg-blue-400 dark:bg-blue-700 dark:hover:bg-blue-900 ">
                Sign in
              </button>
              <button className="btn bg-blue-400 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-700">
                Sign up
              </button>
            </div>
          </ul>
        )}
      </nav>
    </>
  );
}
