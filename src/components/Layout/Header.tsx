import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-bookFlix-colors-primary text-bookFlix-colors-detail p-4">
      <div className="container mx-auto flex justify-center items-center">
        <NavLink
          to="/"
          className="text-xl font-bold text-bookFlix-colors-detail hover:text-bookFlix-colors-accent"
        >
          <h1 className="font-roboto-slab text-3xl font-bold">BookFlix</h1>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
