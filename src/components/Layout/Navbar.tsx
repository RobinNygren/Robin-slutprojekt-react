import { Menu } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import MenuIcon from "../../assets/icons/MenuIcon.svg";
import SearchIcon from "../../assets/icons/SearchIcon.svg";

const Navbar = () => {
  return (
    <nav className="bg-bookFlix-colors-primary text-bookFlix-colors-detail p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Menu as="div" className="relative">
            <Menu.Button className="hover:bg-bookFlix-colors-accent px-4 py-2 rounded flex items-center">
              <img src={MenuIcon} alt="Menu" className="h-12 w-12" />
            </Menu.Button>
            <Menu.Items className="absolute left-0 w-48 mt-2 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    to="/authors/:id"
                    className={`${
                      active ? "bg-gray-100" : ""
                    } block px-4 py-2 text-sm text-gray-900`}
                  >
                    Authors
                  </NavLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    to="/books/:id"
                    className={`${
                      active ? "bg-gray-100" : ""
                    } block px-4 py-2 text-sm text-gray-900`}
                  >
                    Books
                  </NavLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    to="/statistics"
                    className={`${
                      active ? "bg-gray-100" : ""
                    } block px-4 py-2 text-sm text-gray-900`}
                  >
                    Statistics
                  </NavLink>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
          <NavLink
            to="/my-books"
            className="px-4 py-2 hover:bg-bookFlix-colors-accent text-bookFlix-colors-detail"
          >
            My Books
          </NavLink>
          <NavLink
            to="/search"
            className="px-4 py-2 rounded hover:bg-bookFlix-colors-accent text-bookFlix-colors-detail"
          >
            Search
          </NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Quick Search..."
            className="p-1 text-center italic text-bookFlix-colors-primary font-roboto-slab"
          />
          <button className="p-1 rounded-r-md">
            <img src={SearchIcon} alt="Search" className="h-12 w-12" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
