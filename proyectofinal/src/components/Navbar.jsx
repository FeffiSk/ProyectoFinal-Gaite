import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import './Navbar.css';
import { MyContext } from '../context';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { user, login, logout } = useContext(MyContext);

  const handleLogin = () => {
    if (username.trim() !== "") {
      login(username);
      setUsername("");
    } else {
      alert("Por favor ingrese un nombre de usuario.");
    }
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars size={30} color="white" />
      </div>

      {isMenuOpen && (
        <div className="menu">
          <Link to="/categoria/acuatico" className="menu-link">
            Acuático
          </Link>
          <Link to="/categoria/especiado" className="menu-link">
            Especiado
          </Link>
          <Link to="/categoria/amaderado" className="menu-link">
            Amaderado
          </Link>
          <Link to="/categoria/fresco" className="menu-link">
            Fresco
          </Link>
          <Link to="/categoria/oriental" className="menu-link">
            Oriental
          </Link>
        </div>
      )}

      <div className="desktop-menu">
        <Link to="/" className="menu-link">
          Inicio
        </Link>
        <Link to="/about" className="menu-link">
          Acerca de
        </Link>

        <div className="user-info">
          {user ? (
            <>
              <span>Bienvenido, {user.name}</span>
              <button onClick={logout}>Cerrar sesión</button>
            </>
          ) : (
            <>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nombre de usuario"
              />
              <button onClick={handleLogin}>Iniciar sesión</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;