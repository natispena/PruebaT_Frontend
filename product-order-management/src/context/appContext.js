import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [pedidos, setpedidos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  const actualizarProducto = (id, actualizarProducto) => {
    setProductos(productos.map((producto) => (producto.id === id ? actualizarProducto : producto)));
  };

  const borrarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  const agregarpedido = (pedido) => {
    setpedido([...pedidos, pedido]);
  };

  const actualizarpedido = (id, actualizarpedido) => {
    setpedidos(pedidos.map((pedido) => (pedido.id === id ? actualizarpedido : pedido)));
  };

  const borrarpedido = (id) => {
    setpedido(pedidos.filter((pedido) => pedido.id !== id));
  };

  return (
    <AppContext.Provider value={{ productos, agregarProducto, actualizarProducto, borrarProducto, pedidos, agregarpedido, actualizarpedido, borrarpedido }}>
      {children}
    </AppContext.Provider>
  );
};
