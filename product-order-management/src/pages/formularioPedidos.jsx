import React from 'react';
import Form from '../components/Form';
import { useAppContext } from '../context/appProvider';

const formularioPedido = () => {
  const { addOrder } = useAppContext();

  const orderFields = [
    { name: 'productoId', label: 'ID del Producto', placeholder: 'Ingrese el ID del producto', type: 'number' },
    { name: 'cantidad', label: 'Cantidad', placeholder: 'Ingrese la cantidad', type: 'number' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Formulario de Pedido</h2>
      <Form
        initialValues={{ productoId: '', quantity: '' }}
        fields={orderFields}
        onSubmit={addOrder}
        submitText="Guardar Pedido"
      />
    </div>
  );
};

export default formularioPedido;
