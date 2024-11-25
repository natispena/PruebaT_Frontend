// src/paginas/FormularioPedido.jsx
import React, { useState, useEffect } from 'react';
import Formulario from '../componentes/formulario';
import { useContextoApp } from '../contexto/ContextoApp';

const FormularioPedido = () => {
  const { agregarPedido, productos } = useContextoApp();
  const [datosPedido, setDatosPedido] = useState({
    idProducto: '',
    cantidad: 1,
    total: 0,
  });

  useEffect(() => {
    const productoSeleccionado = productos.find((p) => p.id === parseInt(datosPedido.idProducto));
    const precio = productoSeleccionado ? productoSeleccionado.precio : 0;
    setDatosPedido((prevDatos) => ({
      ...prevDatos,
      total: precio * prevDatos.cantidad,
    }));
  }, [datosPedido.idProducto, datosPedido.cantidad, productos]);

  const manejarEnvio = (datos) => {
    agregarPedido(datos);
    setDatosPedido({ idProducto: '', cantidad: 1, total: 0 });
  };

  const camposPedido = [
    {
      nombre: 'idProducto',
      etiqueta: 'Producto',
      placeholder: 'Seleccione un producto',
      tipo: 'select',
      opciones: productos.map((producto) => ({ value: producto.id, label: producto.nombre })),
    },
    { nombre: 'cantidad', etiqueta: 'Cantidad', placeholder: 'Ingrese la cantidad', tipo: 'number' },
    { nombre: 'total', etiqueta: 'Total', placeholder: '', tipo: 'number', soloLectura: true },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Formulario de Pedido</h2>
      <Formulario
        valoresIniciales={datosPedido}
        campos={camposPedido}
        enEnviar={manejarEnvio}
        textoBoton="Guardar Pedido"
      />
    </div>
  );
};

export default FormularioPedido;
