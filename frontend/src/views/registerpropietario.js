import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { apiUse } from "../services/functions";
import Labelerror from "../components/LabelError";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es obligatoria"),
});

const Registerpropietario = (props) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSuccessful = (data) => {
    console.log("exito");
    localStorage.setItem("usuario", JSON.stringify(data));
  };

  const handleError = (error) => {
    console.log("error");
    console.log(error);
  };

  const sendData = (dataform) => {
    apiUse({
      url: "/api/propietarios/",
      method: "POST",
      data: { usuario: dataform },
      handleSuccessful: handleSuccessful,
      handleError: handleError,
    });
  };

  return (
    <section className="py-8">
      <div className="w-full max-w-sm mx-auto">
        <h2 className="text-center text-xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold mb-4">
          Crear cuenta de Propietario
        </h2>
        <form onSubmit={handleSubmit(sendData)}>
          <div className="mb-4">
            <input
              className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
              type="text"
              name="username"
              ref={register}
              placeholder="Username"
            />
          </div>

          <div className="mb-4">
            <Labelerror error={errors}>
              <input
                className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                type="text"
                name="password"
                ref={register}
                placeholder="Password"
              />
            </Labelerror>
          </div>

          <div className="mb-4 mt-4">
            <input
              type="submit"
              value="Crear"
              className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
            ></input>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registerpropietario;
