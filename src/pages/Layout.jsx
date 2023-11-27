import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

function Hamburger({ active, setActive }) {
	return (
		<div className={active ? "hamburger active" : "hamburger"} onClick={() => setActive(!active)}>
			<span className="bar"></span>
			<span className="bar"></span>
			<span className="bar"></span>
		</div>
	)
}

function NavMenu({ active, setActive }) {
	return (
		<ul className={active ? "nav-menu active" : "nav-menu"}>
			<li className="nav-item">
				<Link to="/" className="nav-link" onClick={() => setActive(false)}>Home</Link>
			</li>
			<li className="nav-item">
				<Link to="/location" className="nav-link" onClick={() => setActive(false)}>Location</Link>
			</li>
			<li className="nav-item">
				<Link to="/festivals" className="nav-link" onClick={() => setActive(false)}>Festivals</Link>
			</li>
			<li className="nav-item">
				<Link to="/beaches" className="nav-link" onClick={() => setActive(false)}>Beaches</Link>
			</li>
			<li className="nav-item">
				<Link to="/asador-de-paco" className="nav-link" onClick={() => setActive(false)}>Asador de Paco</Link>
			</li>
		</ul>
	)
}

export default function Layout() {
	const [active, setActive] = useState(false);
	return (
		<>
			<header className="header">
				<nav className="navbar">
					<Link to="/" className="nav-logo">Visit Vejer</Link>
					<NavMenu active={active} setActive={setActive} />
					<Hamburger active={active} setActive={setActive} />
				</nav>
			</header>
			<div style={{height: "55px"}}></div>

			<Outlet />

			<footer style={{padding: "15px", fontSize: "15px"}}>
				<p>Author: Alexander B</p>
			</footer>
		</>
	)
};