import { Link } from "react-router-dom";
import { PATH } from "../router/path";

function Navbar({ onChange, value }) {
  return (
    <nav className="Navbar">
      <Link to={PATH.HOME}>
        <h2 className="Navbar-icon">PAPELERA ALONSO</h2>
      </Link>
      <div className="Navbar-links">
        <Link to={PATH.HOME} className="Navbar-link">
          Oferta del dia!
        </Link>
        <Link to={PATH.HOME} className="Navbar-link">
          Mas vendidos
        </Link>
        <Link to={PATH.HOME} className="Navbar-link">
          Servicio al cliente
        </Link>
        <input type="text" value={value} onChange={onChange} />
        <Link to={PATH.HOME} className="Navbar-link">
          Crea tu cuenta
        </Link>
        <Link to={PATH.HOME} className="Navbar-link">
          ingresar
        </Link>
        <Link to={PATH.CART} className="Navbar-link">
          carrito
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
