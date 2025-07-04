import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import logo from './pictures/logo.jpg'; // importa el logo

const Layout = () => {
  const { user, isAdmin, logout } = useContext(AuthContext);
  return (
    <div style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <header style={{
        padding: '10px',
        backgroundColor: '#ddd',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo e nome */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold', marginRight: '20px', display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px', borderRadius: '8px' }} />
            BizBay
          </Link>
          {/* Links de navegación */}
          <nav>
            <Link to="/" style={{ margin: '0 8px' }}>Inicio</Link>
            <Link to="/productos" style={{ margin: '0 8px' }}>Productos</Link>
            <Link to="/favoritos" style={{ margin: '0 8px' }}>Mis Favoritos</Link>
            {isAdmin && <Link to="/edicion" style={{ margin: '0 8px' }}>Edición</Link>}
            {isAdmin && <Link to="/papelera" style={{ margin: '0 8px' }}>Papelera</Link>}
            <Link to="/acerca" style={{ margin: '0 8px' }}>Nosotros</Link>
          </nav>
        </div>
        <div>
          {user ? (
            <>
              <span>Hola, {user.username}</span>
              <button onClick={logout} style={{
                marginLeft: '10px',
                padding: '6px 12px',
                backgroundColor: '#e74c3c',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Cerrar Sesión
              </button>
            </>
          ) : (
            <Link to="/login" style={{
              padding: '6px 12px',
              backgroundColor: '#3498db',
              color: '#fff',
              borderRadius: '4px',
              textDecoration: 'none'
            }}>
              Login
            </Link>
          )}
        </div>
      </header>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

