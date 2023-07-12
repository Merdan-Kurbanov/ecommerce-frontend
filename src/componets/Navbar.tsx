import { Link } from "react-router-dom";

import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { useState } from "react";


export const navLinks = [
    {
      id: "/",
      title: "Home",
    },
    {
      id: "shop",
      title: "Shop",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
function Navbar() {
  const [active, setactive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" fixed w-full z-20 top-0 left-0  border-b border-gray-600 bg-primary">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          onClick={() => {
            setactive("");
            window.scrollTo(0, 0);
          }}
          className="flex items-center "
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Ecommerce
          </span>
        </Link>

        <div className="sm:hidden flex  justify-end items-center order-2">
          <button
            type="button"
            className="text-white md:hidden  bg-secondary hover:bg-seclight focus:ring-1 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-3 py-1 text-center mr-3 md:mr-0 "
          >
            Sign In
          </button>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain "
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } w-full  black-gradient absolute top-16 right-0  min-w-[140px] z-10 rounded-xl `}
          >
            <ul className="w-full flex flex-col p-4  font-medium rounded-lg  border border-gray-500 bg-primary ">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <Link
                    className={`block py-2 pl-3 pr-4  rounded hover:text-seclight hover:bg-gray-300  text-white md:p-0    ${
                      active === nav.title ? "text-blue-800" : "text-white"
                    }`}
                    onClick={() => {
                      setactive(nav.title);
                    }}
                    to={nav.id}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="items-center justify-between hidden  w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <Link
                  to={nav.id}
                  onClick={() => {
                    setactive(nav.title);
                  }}
                  className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:text-gray-300  hover:bg-transparent  md:p-0    ${
                    active === nav.title ? "text-gray-400" : "md:text-white"
                  }`}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:flex  md:order-2 hidden ">
          <button
            type="button"
            className="text-white  bg-[#ff3603] hover:bg-turuncu focus:ring-2 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
          >
            Admin
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;