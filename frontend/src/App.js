import React from "react";
import { connect } from "react-redux";
import Layout from "./components/layout";
import Homepage from "./views/homepage";
import Login from "./views/login";

function App(props) {
  switch (props.ruta) {
    case "homepage":
      return (
        <Layout>
          <Homepage />
        </Layout>
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
