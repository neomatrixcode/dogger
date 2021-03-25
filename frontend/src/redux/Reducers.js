import { combineReducers } from "redux";
import { getCookieValue, datauserexist } from "../services/functions";

const Ruta = (state = "homepage", action) => {
  switch (action.type) {
    case "SET_RUTA":
      return action.ruta;

    default:
      return state;
  }
};

const Logueo = (state = datauserexist(), action) => {
  switch (action.type) {
    case "SET_LOGUEO":
      return action.datos;

    default:
      return state;
  }
};

export default combineReducers({
  Ruta,
  Logueo,
});
