
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg justify-content-between mb-5" >
        <div className='container'>
        <h1>Redux</h1>
        <a href="/" className='btn btn-danger d-block'>
            Agregar elemento
        </a>
        </div>
      </nav>
    </header>
  );
};

export {Header};
