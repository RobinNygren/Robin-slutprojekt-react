import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Error 404 page not found.</h1>
      <p>
        <NavLink to="/"> Back to home </NavLink>
      </p>
    </>
  );
};

export default NotFound;
