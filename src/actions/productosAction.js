//las acciones tienen un tipo y payload(datos), Estas se llamaan desde los componente
// y se disparan con un dispatch hacia el reducer

import { AGREGAR_PRODUCTO } from "../types";
import { AGREGAR_PRODUCTO_EXITO } from "../types";
import { AGREGAR_PRODUCTO_ERROR } from "../types";

import axios from "axios";

/* const cualquierFuncion = () => {
    //tipo
    //payload - data que modifica el state
} */

// Action para crear nuevos productos
export const crearNuevoProductoAction = (producto) => {
  return async (dispatch) => {
    //dispatch ejecuta las acciones hacía el reducer
    dispatch(agregarProducto());
    try {
      await axios.post("http://localhost:4000/productos", producto);

      dispatch(agregarProductoExito(producto));
    } catch (error) {
      dispatch(agregarProductoError(true));
    }
  };
};

//Funcion para enviar el type y el payload para actualizar el loading dentro del reducer
const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
});

const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

//Funcion que envia el type al payload que envia el error al store
const agregarProductoError = (stateError) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: stateError,
});
