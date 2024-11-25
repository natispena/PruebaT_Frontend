// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProveedorApp } from './contexto/ContextoApp';
import ListadoProductos from './paginas/ListadoProductos';
import ListadoPedidos from './paginas/ListadoPedidos';
import FormularioProducto from './paginas/formularioProducto';
import FormularioPedido from './paginas/formularioPedidos';

const App = () => {
  return (
    <ProveedorApp>
      <Router>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<ListadoProductos />} />
            <Route path="/productos/nuevo" element={<FormularioProducto />} />
            <Route path="/pedidos/nuevo" element={<FormularioPedido />} />
            <Route path="/pedidos" element={<ListadoPedidos />} />
          </Routes>
        </div>
      </Router>
    </ProveedorApp>
  );
};

export default App;
