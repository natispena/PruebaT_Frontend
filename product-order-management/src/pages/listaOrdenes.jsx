const tablaOrden = ({ data, onEdit, onDelete }) => (
    <table className="min-w-full">
      <thead>
        <tr>
          <th>id pedido</th>
          <th>Cantidad</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.cantidad}</td>
            <td>{item.total}</td>
            <td>
              <button onClick={() => onEdit(item.id)}>Editar</button>
              <button onClick={() => onDelete(item.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );