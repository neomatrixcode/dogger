import React from "react";
import { connect } from "react-redux";
import { setRuta, setLogueo } from "../redux/Actions";

const Loginpaseador = (props) => {
  const crearCuenta = (e) => {
    props.setRuta("registerpaseador");
  };
  return (
    <section className="py-8">
      <div className="w-full max-w-sm mx-auto">
        <h2 className="text-center text-xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold mb-4">
          Ingresar como paseador
        </h2>
        <form>
          <div className="mb-4">
            <input
              className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <input
              className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="mb-4 mt-4">
            <button className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow">
              Entrar
            </button>
          </div>
        </form>
        <div className="flex flex-row-reverse ">
          <div className=" text-sm font-display font-semibold text-gray-700 text-center">
            No tengo cuenta
            <a
              onClick={crearCuenta}
              className=" pl-1 cursor-pointer text-indigo-600 hover:text-indigo-800"
            >
              crea una
            </a>
            .
          </div>
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setRuta: (ruta) => dispatch(setRuta(ruta)),
  setLogueo: (datos) => dispatch(setLogueo(datos)),
});

const mapStateToProps = (state) => ({
  Logueo: state.Logueo,
});

export default connect(mapStateToProps, mapDispatchToProps)(Loginpaseador);
