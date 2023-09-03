import "./Menu.css";

import { Link } from "react-router-dom";

const Menu = (props) => {
	return (
		<aside className="Menu">
			<nav>
				<ul>
					<li>
						<Link to="/">Início</Link>
					</li>
					<li>
						<Link to="/param/123">Param #01</Link>
					</li>
					<li>
						<Link to="/param/produtoX">Param #02</Link>
					</li>
					<li>
						<Link to="/about">Sobre</Link>
					</li>
					<li>
						<Link to="/404">404</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Menu;
