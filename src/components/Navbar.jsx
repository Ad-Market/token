import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 md:flex justify-end   my-4">
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
        <NavLink to="/contribute">
          <button>Contribute</button>
        </NavLink>
        <NavLink to="/create">
          <button>Create</button>
        </NavLink>
        <NavLink to="/create-sale">
          <button>Create Sale</button>
        </NavLink>

        <button>Conntact</button>
      </div>
    </div>
  );
};

export default Navbar;
