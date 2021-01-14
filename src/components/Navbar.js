const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark c-nav">
        <div className="container">
          <a className="navbar-brand ms-2" href="#top">
          <h1>Abed Al Rahim Soubra</h1>
          </a>
          <div className="float-end">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-5">
                <li className="nav-item">
                  <a className="nav-link h5" aria-current="page" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link h5" href="#interests">Interests</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link h5" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;