# PruebaT_Frontend
Prueba tecnica a linktic fronted medio.
# Descripcion de la aplicacion.
CRUD de Productos: Permite crear, leer, actualizar y eliminar productos.
Gestión de Pedidos: Permite crear y gestionar pedidos asociados a productos.
Formulario Reutilizable: Uso de componentes de formulario reutilizables para productos y pedidos.
Diseño Responsivo: Estilos implementados con Tailwind CSS para un diseño moderno y adaptable.
Simulación de Backend: Datos simulados para productos y pedidos sin necesidad de backend.

# tecnologias utilizadas 
React: Biblioteca de JavaScript para construir interfaces de usuario.
React Router: Manejador de rutas para crear una SPA.
Context API: Para la gestión global de estado.
Tailwind CSS: Framework CSS para el diseño rápido y eficiente.

# estructura
my-app/
├── public/
├── src/
│   ├── componentes/      # Componentes reutilizables como formularios
│   │   ├── Formulario.jsx
│   │   ├── FormularioProducto.jsx
│   │   └── FormularioPedido.jsx
│   ├── contexto/         # Contexto de la aplicación
│   │   └── ContextoApp.jsx
│   ├── paginas/          # Páginas principales de la aplicación
│   │   ├── ListadoProductos.jsx
│   │   └── ListadoPedidos.jsx
│   ├── App.jsx           # Componente principal de la aplicación
│   ├── index.css         # Importación de Tailwind CSS
│   └── index.js          # Punto de entrada principal
├── tailwind.config.js    # Configuración de Tailwind CSS
├── package.json
└── README.md

# Instalación 
Requisitos previos.

Node.js y npm instalados en tu sistema.

clonar repositorio
git clone <https://github.com/natispena/PruebaT_Frontend.git>
cd product-oder-management

Instalar dependencias
npm install

Configurar Tailwind CSS
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

Ejecutar la Aplicación
npm start

# Errores comunes
Error: @babel/plugin-proposal-private-property-in-object
ejecutar
npm install --save-dev @babel/plugin-proposal-private-property-in-object

# Docker
Usar la imagen base de Node
FROM node:16

Crear y definir el directorio de trabajo
WORKDIR /app

Copiar el archivo package.json y package-lock.json
COPY package*.json ./

Instalar las dependencias
RUN npm install

Copiar el resto de la aplicación
COPY . .

Exponer el puerto de desarrollo
EXPOSE 3000

Comando para iniciar la aplicación
CMD ["npm", "start"]
