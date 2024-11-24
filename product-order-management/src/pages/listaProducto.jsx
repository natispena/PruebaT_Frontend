const tablaProducto = ({ data, onEdit, onDelete }) => (
    <table className="min-w-full">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.nombre}</td>
            <td>{item.precio}</td>
            <td>
              <button onClick={() => onEdit(item.id)}>Editar</button>
              <button onClick={() => onDelete(item.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );