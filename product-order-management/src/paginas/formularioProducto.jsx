// src/paginas/FormularioProducto.jsx
import React, { useState } from 'react';
import Formulario from '../componentes/formulario';
import { useContextoApp } from '../contexto/ContextoApp';

const FormularioProducto = () => {
  const { agregarProducto } = useContextoApp();
  const [datosProducto, setDatosProducto] = useState({
    nombre: '',
    precio: '',
  });

  const manejarEnvio = (datos) => {
    agregarProducto(datos);
    setDatosProducto({ nombre: '', precio: '' });
  };

  const camposProducto = [
    { nombre: 'nombre', etiqueta: 'Nombre del Producto', placeholder: 'Ingrese el nombre', tipo: 'text' },
    { nombre: 'precio', etiqueta: 'Precio', placeholder: 'Ingrese el precio', tipo: 'number' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Formulario de Producto</h2>
      <Formulario
        valoresIniciales={datosProducto}
        campos={camposProducto}
        enEnviar={manejarEnvio}
        textoBoton="Guardar Producto"
      />
    </div>
  );
};

export default FormularioProducto;
