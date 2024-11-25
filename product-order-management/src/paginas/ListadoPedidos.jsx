// src/paginas/ListadoPedidos.jsx
import React from 'react';
import { useContextoApp } from '../contexto/ContextoApp';

const ListadoPedidos = () => {
  const { pedidos, productos } = useContextoApp();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Listado de Pedidos</h2>
      <ul>
        {pedidos.map((pedido) => {
          const producto = productos.find((p) => p.id === pedido.idProducto);
          return (
            <li key={pedido.id} className="p-2 border-b">
              {producto ? producto.nombre : 'Producto no disponible'} - Cantidad: {pedido.cantidad} - Total: ${pedido.total}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListadoPedidos;
