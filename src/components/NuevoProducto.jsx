import {useState} from "react"

const NuevoProducto = () => {

    const [nombre,  setNombre] = useState('')
    const [precio,  setPrecio] = useState(0)

    const FuncionCambioPrecio = e => {
        setPrecio(e.target.value)
    }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4">Agregar nuevo elemento</h2>

            <form>
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
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
                  onChange={FuncionCambioPrecio}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-3 "
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export {NuevoProducto};
