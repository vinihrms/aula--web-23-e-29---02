import './Navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className="navbar">
        <ul className="link_list">
          <li className="link_item">
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li className="link_item">
            <NavLink to="/dia23" className="link">
              Atividade dia 23
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dia29" className="link">
              Atividade dia 29
            </NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
