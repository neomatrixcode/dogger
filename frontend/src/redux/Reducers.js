import { combineReducers } from "redux";

const Ruta = (state = "homepage", action) => {
  switch (action.type) {
    case "SET_RUTA":
      return action.ruta;

    default:
      return state;
  }
};

export default combineReducers({
  Ruta,
});
