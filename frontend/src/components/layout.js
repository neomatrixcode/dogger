import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = (props) => {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
