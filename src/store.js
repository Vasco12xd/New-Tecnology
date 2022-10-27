//el store almacena el state de la applicación completa
import {configureStore} from "@reduxjs/toolkit";

//Importando el reducer
import reducer from "./reducers";

//Creamos el store
const store = configureStore(reducer);


export {store};

