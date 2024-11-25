// src/paginas/ListadoProductos.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContextoApp } from '../contexto/ContextoApp';

const ListadoProductos = () => {
  const navigate = useNavigate();
  const { productos } = useContextoApp();

  // Ejemplos de productos si la lista de productos está vacía
  const productosEjemplo = [
    { id: 1, nombre: 'Producto A', precio: 100 },
    { id: 2, nombre: 'Producto B', precio: 200 },
    { id: 3, nombre: 'Producto C', precio: 300 },
  ];

  // Utilizar productos del contexto o los ejemplos si no hay productos en el contexto
  const listaProductos = productos.length > 0 ? productos : productosEjemplo;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Listado de Productos</h2>

      {/* Botones para agregar productos y pedidos */}
      <div className="mb-4 flex gap-4">
        <button
          onClick={() => navigate('/productos/nuevo')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Agregar Producto
        </button>
        <button
          onClick={() => navigate('/pedidos/nuevo')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Crear Pedido
        </button>
      </div>

      {/* Lista de productos */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listaProductos.map((producto) => (
          <li key={producto.id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{producto.nombre}</h3>
            <p className="text-gray-700">Precio: ${producto.precio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListadoProductos;
