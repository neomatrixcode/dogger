import React from "react";
import { connect } from "react-redux";
import { setRuta, setLogueo } from "../redux/Actions";

const Panel = (props) => {
  return (
    <section className="py-8 px-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/4 px-4 mb-4 lg:mb-0">
          <div className="h-full border rounded shadow">
            <div className="flex items-center justify-between py-3 px-4 border-b">
              <h3 className="text-lg font-semibold font-heading">Income</h3>
              <span className="py-1 px-3 text-sm text-white font-semibold bg-green-500 rounded-full">
                Monthly
              </span>
            </div>
            <div className="flex flex-col p-4">
              <h3 className="text-3xl mb-3 font-semibold font-heading ">
                108,200
              </h3>
              <span>Total income</span>
              <span className="text-green-500">82%</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 px-4 mb-4 lg:mb-0">
          <div className="h-full border rounded shadow">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <h3 className="text-lg font-semibold font-heading">Orders</h3>
              <span className="py-1 px-3 text-sm text-white font-semibold bg-green-500 rounded-full">
                Monthly
              </span>
            </div>
            <div className="flex flex-col p-4">
              <h3 className="text-3xl mb-3 font-semibold font-heading ">
                128,430
              </h3>
              <span>New orders</span>
              <span className="text-green-500">32%</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 px-4 mb-4 lg:mb-0">
          <div className="h-full border rounded shadow">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <h3 className="text-lg font-semibold font-heading">Visits</h3>
              <span className="py-1 px-3 text-sm text-white font-semibold bg-green-500 rounded-full">
                Monthly
              </span>
            </div>
            <div className="flex flex-col p-4">
              <h3 className="text-3xl mb-3 font-semibold font-heading ">
                81,248
              </h3>
              <span>New visits</span>
              <span className="text-green-500">24%</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 px-4 mb-4 lg:mb-0">
          <div className="h-full border rounded shadow">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <h3 className="text-lg font-semibold font-heading">
                Conversions
              </h3>
              <span className="py-1 px-3 text-sm text-white font-semibold bg-red-500 rounded-full">
                Today
              </span>
            </div>
            <div className="flex flex-col p-4">
              <h3 className="text-3xl mb-3 font-semibold font-heading ">7%</h3>
              <span>Purchased more than once</span>
              <span className="text-red-500">82%</span>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
