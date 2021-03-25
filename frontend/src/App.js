import React from "react";
import { connect } from "react-redux";
import Layout from "./components/layout";
import Homepage from "./views/homepage";
import Login from "./views/login";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App(props) {
  switch (props.ruta) {
    case "homepage":
      return (
        <div className="container mx-auto px-4">
          <Navbar />
          <Homepage />
          <Footer />
        </div>
      );

    case "login":
      return (
        <Layout>
          <Login />
        </Layout>
      );

    case undefined:
      return (
        <Layout>
          <Homepage />
        </Layout>
      );

    default:
      return (
        <Layout>
          <Homepage />
        </Layout>
      );
  }
}

const mapStateToProps = (state) => ({
  ruta: state.Ruta,
});

export default connect(mapStateToProps)(App);
