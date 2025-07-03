import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProductosProvider } from './context/ProductosContext';
import { CarritoProvider } from './context/CarritoContext';
import AppRoutes from './AppRoutes';
import './App.css'; // estilos de navegación, main, etc.
function App() {
  return (
    <AuthProvider>
      <ProductosProvider>
        <CarritoProvider>
          <Router>
            <AppRoutes />
          </Router>
        </CarritoProvider>
      </ProductosProvider>
    </AuthProvider>
  );
}
export default App;
