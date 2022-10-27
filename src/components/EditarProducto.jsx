import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditarProducto = () => {
  const [producto, setProducto] = useState({
    nombre: "",
    precio: 0,
  });

  //Instanciando useNavigate para redireccionar a la página principal
  const navigate = useNavigate();

  //Funcion que actualiza el state
  const actualizarState = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const { nombre, precio } = producto;

  //Funcion que ejecuta al enviar el formulario
  const submitProductoEditar = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4">Editar elemento</h2>

            <form onSubmit={submitProductoEditar}>
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre producto"
                  name="nombre"
                  value={nombre}
                  onChange={actualizarState}
                />
              </div>
              <div>
                <label>Precio</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre producto"
                  name="precio"
                  value={precio}
                  onChange={actualizarState}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-3 "
                onClick={""}
              >
                Editar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EditarProducto };
