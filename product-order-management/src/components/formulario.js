// src/components/Formulario.jsx
import React, { useState } from 'react';

const Form = ({ initialValues, fields, onSubmit, submitText }) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialValues); // Reiniciar el formulario si es necesario
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label htmlFor={field.name} className="font-semibold">{field.label}</label>
          <input
            type={field.type || 'text'}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
            placeholder={field.placeholder || ''}
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
        {submitText}
      </button>
    </form>
  );
};

export default Form;
