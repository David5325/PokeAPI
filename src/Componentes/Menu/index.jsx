import { Link } from 'react-router-dom';

function Menu({ usuario }) {
  return (
    <nav className="c-menu">
      <Link to="/">Home</Link>
      <Link to="/capturados">Capturados</Link>
      <Link to="/aleatorios">Aleatorios</Link>
      <Link to="/usuarios">Usuarios</Link>
      <Link to="/favoritos">Favoritos</Link>

      {/* Botón de Admin solo si el usuario tiene el rol 'admin' */}
      {usuario && usuario.roll === 'admin' && (
        <Link to="/admin">Administrador</Link>
      )}
    </nav>
  );
}

export default Menu;
