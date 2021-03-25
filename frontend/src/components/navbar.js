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
      <div className="block lg:hidden">
        <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
        <a
          className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
          href="#equipo"
        >
          Equipo
        </a>
        <a
          className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600"
          href="#precios"
        >
          Precios
        </a>
      </div>
      <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
        <a
          className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
          href="#"
        >
          Blog
        </a>
        <a
          className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
          href="#"
        >
          FAQ
        </a>
        <a
          className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600"
          href="#contacto"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
