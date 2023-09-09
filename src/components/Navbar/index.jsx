import { useState } from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../router/path";
import './index.css'

export const useToggle = (state = false) => {
	const [value, setValue] = useState(state)
	const toggle = () => { setValue(prev => !prev) }

	return [value, toggle]
}

//<div className="Navbar-links hide-for-mobile">
function Navbar({ onChange, value }) {
	const [visible, setVisible] = useToggle()

	return (
		<nav className="Navbar">
			<Link to={PATH.HOME}>
				<h2 className="Navbar-icon">PAPELERA ALONSO</h2>
			</Link>
			<div className="Navbar-links ">
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
			<BtnHamburger toggle={visible} setVisible={setVisible} />
		</nav>
	);
}

const BtnHamburger = ({ toggle, setVisible }) => {
	return (
		<div class={`Navbar-toggle hide-for-desktop${toggle ? " open" : ''}`} onClick={() => setVisible()}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}

export default Navbar;