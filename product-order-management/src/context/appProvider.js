// src/context/AppProvider.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [productos, setproductos] = useState([]);
  const [pedidos, setpedidos] = useState([]);

  const agregarproducto = (nuevoProducto) => {
    setproductos([...productos, { ...nuevoProducto, id: productos.length + 1 }]);
  };

  const agregarpedido = (nuevoPedido) => {
    setpedidos([...pedidos, { ...nuevoPedido, id: pedidos.length + 1 }]);
  };

  return (
    <AppContext.Provider value={{ productos, pedidos, agregarproducto, agregarpedido }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAppContext = () => useContext(AppContext);
