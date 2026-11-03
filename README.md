# API REST de Gestión de Contactos

## 1. Descripción del proyecto

Este proyecto consiste en el desarrollo de una API RESTful para la gestión de contactos de la empresa AtenciónTotal. Implementé un servidor utilizando Node.js y Express, conectado a una base de datos MySQL mediante Sequelize.

La aplicación permite registrar, consultar, actualizar y eliminar contactos. También cuenta con una interfaz web que facilita la interacción con la API y permite administrar los registros desde el navegador.

Además, incorporé Docker para preparar la ejecución de la aplicación en un contenedor y utilicé GitHub para almacenar y compartir el código fuente.

## 2. Tecnologías utilizadas

- **Node.js:** entorno de ejecución de JavaScript.
- **Express:** framework utilizado para desarrollar el servidor y definir las rutas de la API.
- **MySQL:** sistema de gestión de base de datos.
- **XAMPP:** entorno utilizado para ejecutar y administrar MySQL.
- **Sequelize:** ORM utilizado para interactuar con la base de datos.
- **MySQL2:** controlador para la conexión con MySQL.
- **HTML, CSS y JavaScript:** tecnologías utilizadas para desarrollar la interfaz web.
- **Docker:** herramienta utilizada para contenerizar la aplicación.
- **Git y GitHub:** herramientas utilizadas para el control de versiones y almacenamiento del código fuente.

## 3. Funcionalidades principales

La API permite realizar las siguientes operaciones:

| Método HTTP | Endpoint | Descripción |
|---|---|---|
| GET | `/api/contacts` | Obtener todos los contactos. |
| GET | `/api/contacts/:id` | Consultar un contacto por su ID. |
| POST | `/api/contacts` | Registrar un nuevo contacto. |
| PUT | `/api/contacts/:id` | Actualizar un contacto existente. |
| DELETE | `/api/contacts/:id` | Eliminar un contacto. |
| GET | `/api/health` | Consultar el estado de la API y la conexión con MySQL. |

## 4. Estructura del proyecto

```text
gestion-contactos/
│
├── models/
│   └── Contact.js
│
├── public/
│   └── index.html
│
├── routes/
│   └── contactRoutes.js
│
├── app.js
├── db.js
├── Dockerfile
├── .dockerignore
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
