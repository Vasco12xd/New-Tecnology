//Cada reducer tiene su propio state

//Importando Types
import { AGREGAR_PRODUCTO} from "../types";

const initialState = {
    productos: [],
    error: null,
    loading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state=initialState, action){
    switch(action.type){
        case AGREGAR_PRODUCTO: 
           return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
}