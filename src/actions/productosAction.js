//las acciones tienen un tipo y payload(datos), Estas se llamaan desde los componente
// y se disparan con un dispatch hacia el reducer 

import { AGREGAR_PRODUCTO } from "../types";

import axios from "axios";

/* const cualquierFuncion = () => {
    //tipo
    //payload - data que modifica el state
} */        

// Action para crear nuevos productos
export const crearNuevoProductoAction = (producto) => {
    return (dispatch) => {
        //dispatch ejecuta las acciones hacía el reducer
        dispatch(agregarProducto());
    };
};

//Funcion para enviar el type y el payload para actualizar el loading dentro del reducer
const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

