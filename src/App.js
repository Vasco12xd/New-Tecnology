//componentes
import React from "react";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import { NuevoProducto } from "./components/NuevoProducto";
import { EditarProducto } from "./components/EditarProducto";

//Redux
import { Provider } from "react-redux"; 

//Store
import {store} from "./store";

function App() {
  return (
    // envuelve la app y permite utilizar react router dom
    <Router>
      <Provider store={store}>
      <Header />
      <div className="container">
        {/* envuelve todas las rutas que tiene la app*/}
        <Routes>
          {/* Route nos permite definir las rutas, indicamos la url
           y el componente al que hace referencia - especie de switch
           solo podemos tener una ruta activa a la vez*/}
          <Route path="/" element={<Products />} />
          <Route path="/products/nuevoproducto" element={<NuevoProducto />} />
          <Route path="/products/editarproducto/:id" element={<EditarProducto />} />
        </Routes>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
