import {useState} from "react"

const NuevoProducto = () => {

    const [nombre,  setNombre] = useState('')
    const [precio,  setPrecio] = useState(0)

    const FuncionCambioPrecio = e => {
        setPrecio(e.target.value)
    }

    const submitProduct = (e) => {
        e.preventDefault()

        //Trim elimina espacios en blanco adelante y atrás
        if(nombre.trim() === '' || precio <= 0) {
            const res = {
              msg: 'Ambos campos son obligatorios',
              status: "400",
            };
            return alert(res.msg)
        }
    };

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
                onClick={submitProduct}
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
