import React from "react";
import { connect } from "react-redux";
import { setRuta, setLogueo } from "../redux/Actions";

const Navbarsimple = (props) => {
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

const mapDispatchToProps = (dispatch) => ({
  setRuta: (ruta) => dispatch(setRuta(ruta)),
  setLogueo: (datos) => dispatch(setLogueo(datos)),
});

const mapStateToProps = (state) => ({
  Logueo: state.Logueo,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbarsimple);
