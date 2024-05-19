import { Menu } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import MenuIcon from "../../assets/icons/MenuIcon.svg";

const Navbar = () => {
  return (
    <nav className="bg-bookFlix-colors-primary text-bookFlix-colors-detail p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Menu as="div" className="relative">
            <Menu.Button className="hover:bg-bookFlix-colors-accent px-2 py-1 rounded flex items-center">
              <img src={MenuIcon} alt="Menu" className="h-12 w-12" />
            </Menu.Button>
            <Menu.Items className="absolute left-0 w-48 mt-2 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    to="/statistics"
                    className={`${
                      active ? "bg-gray-100 rounded-md" : ""
                    } block hover:bg-bookFlix-colors-accent px-4 py-2 text-sm text-gray-900`}
                  >
                    Statistics
                  </NavLink>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
          <NavLink
            to="/favorites"
            className="px-4 py-2 rounded hover:bg-bookFlix-colors-accent text-bookFlix-colors-detail"
          >
            Favorites
          </NavLink>
          <NavLink
            to="/search"
            className="px-4 py-2 rounded hover:bg-bookFlix-colors-accent text-bookFlix-colors-detail"
          >
            Search
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
