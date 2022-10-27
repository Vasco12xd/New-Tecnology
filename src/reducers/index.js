//reducers son funciones que saben que hacer con las acciones y el
//Payload para actualizar el state en el store

import { combineReducers } from "redux";
//importando reducers
import productosReduce from "./productosReduce";

export default combineReducers({
  productos: productosReduce,
});
