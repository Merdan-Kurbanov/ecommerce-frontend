import  { useState, useEffect } from "react";
import Logo from "../shop.png";
import { Link } from "react-router-dom";
import { useSignOut } from "react-auth-kit";



const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState<string>("");
  const signOut = useSignOut()
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="fixed bg-white border-gray-200 dark:bg-primary w-full top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center">
          <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            KOTON
          </span>
        </a>
        <div className="flex items-center md:order-2 relative">
          <button
            type="button"
            className="hidden md:flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            onClick={handleDropdownToggle}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              alt="user photo"
            />
          </button>
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div
              className="absolute top-6 right-10  z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-secondary "
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Merdan K
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  name@blabla.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    to={"/admin"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-primary dark:text-gray-200 dark:hover:text-white"
                  >
                    Admin
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-primary dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>

                <li>
                  <button
                    onClick={() => signOut()}
                    className="w-full left-0 px-4 text-left py-2   text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-primary dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          )}

          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
            onClick={handleDropdownToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <button onClick={handleThemeSwitch} className=" w-5 ml-4">
            <svg
              className="dark:fill-[#ffce45] stroke-[#ffce45]"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 right-5"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-primary dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
