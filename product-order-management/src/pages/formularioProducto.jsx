import React from 'react';
import Form from '../components/formulario';
import { useAppContext } from '../context/appProvider';

const formularioProducto = () => {
  const { agregarProducto } = useAppContext();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Formulario de Producto</h2>
      <Form
        initialValues={{ nombre: '', precio: '' }}
        onSubmit={agregarProducto}
        fields={[
          { name: 'Nombre', label: 'Nombre del Producto', placeholder: 'Ingrese el nombre del producto' },
          { name: 'Precio', label: 'Precio', placeholder: 'Ingrese el precio', type: 'number' },
        ]}
        submitText="Guardar Producto"
      />
    </div>
  );
};

export default formularioProducto;
