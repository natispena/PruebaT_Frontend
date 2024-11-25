// src/contexto/ContextoApp.jsx
import React, { createContext, useContext, useState } from 'react';

const ContextoApp = createContext();

export const ProveedorApp = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [pedidos, setPedidos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, { id: productos.length + 1, ...producto }]);
  };

  const agregarPedido = (pedido) => {
    setPedidos([...pedidos, { id: pedidos.length + 1, ...pedido }]);
  };

  return (
    <ContextoApp.Provider value={{ productos, pedidos, agregarProducto, agregarPedido }}>
      {children}
    </ContextoApp.Provider>
  );
};

export const useContextoApp = () => useContext(ContextoApp);
