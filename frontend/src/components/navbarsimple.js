import React from "react";

const Navbar = (props) => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-4">
      <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
        <a
          className="text-xl text-indigo-600 font-semibold font-heading"
          href="#"
        >
          Dogger
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
