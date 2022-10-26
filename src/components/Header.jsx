import {Link} from 'react-router-dom';
//Link evita que cargue cuando le damos atrás

const Header = () => {
  return (
    
    <header>
      <nav className="navbar navbar-expand-lg justify-content-between mb-5">
        <div className="container">
          <h1>
            <Link to={"/"} className="text-decoration-none">
              Redux
            </Link>
          </h1>
          <Link to="/products/nuevoproducto" className="btn btn-danger d-block">
            Agregar elemento
          </Link>
        </div>
      </nav>
    </header>
  );
};

export {Header};
