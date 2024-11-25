import React, { useState } from 'react';

const Formulario = ({ valoresIniciales, campos, enEnviar, textoBoton }) => {
  const [datosFormulario, setDatosFormulario] = useState(valoresIniciales);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatosFormulario((prevDatos) => ({
      ...prevDatos,
      [name]: value,
    }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    enEnviar(datosFormulario);
  };

  return (
    <form onSubmit={manejarEnvio} className="p-4 bg-white shadow-md rounded-lg max-w-md mx-auto">
      {campos.map((campo) => (
        <div key={campo.nombre} className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">{campo.etiqueta}</label>
          {campo.tipo === 'select' ? (
            <select
              name={campo.nombre}
              value={datosFormulario[campo.nombre]}
              onChange={manejarCambio}
              className="border rounded px-3 py-2 w-full"
            >
              <option value="">{campo.placeholder}</option>
              {campo.opciones.map((opcion) => (
                <option key={opcion.value} value={opcion.value}>
                  {opcion.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={campo.tipo}
              name={campo.nombre}
              value={datosFormulario[campo.nombre]}
              onChange={manejarCambio}
              placeholder={campo.placeholder}
              readOnly={campo.soloLectura || false}
              className="border rounded px-3 py-2 w-full"
            />
          )}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        {textoBoton}
      </button>
    </form>
  );
};

export default Formulario;
