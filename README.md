# 🛒 E-commerce API

API RESTful para gestión de productos, desarrollada con **Node.js**, **Express**, **MongoDB** y autenticación **JWT**. Proyecto educativo enfocado en la práctica de desarrollo backend moderno, seguridad y buenas prácticas de arquitectura.

---

## 🚀 Funcionalidades

- 🔐 Registro e inicio de sesión de usuarios
- 🔑 Autenticación con JWT
- 📦 CRUD de productos (crear, ver, eliminar)
- 🧱 Separación por capas: rutas, controladores, modelos
- ⚠️ Middleware de errores personalizado
- 🌐 CORS habilitado para clientes frontend

---

## 📁 Estructura del proyecto

```
src/
├── config/              # Conexión a MongoDB
├── controllers/         # Lógica de negocio
├── middlewares/         # Autenticación, manejo de errores
├── models/              # Modelos de Mongoose (User, Product)
├── routes/              # Rutas de la API
├── index.js             # Punto de entrada de la app
.env                     # Variables de entorno
```

---

## 🛠️ Tecnologías usadas

- Node.js
- Express
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcryptjs (para hashear contraseñas)
- dotenv (manejo de variables de entorno)
- Thunder Client / Postman (para testeo)

---

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/ErolesSA/ecommerce-api.git
cd ecommerce-api
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear un archivo `.env` y configurar las variables:

```env
PORT=5000
MONGO_URI=mongodb+srv://<tu_usuario>:<tu_pass>@<tu_cluster>.mongodb.net/<tu_db>?retryWrites=true&w=majority
JWT_SECRET=unaClaveSuperSecreta123
```

4. Iniciar el servidor en desarrollo:
```bash
npm run dev
```

---

## 📫 Endpoints principales

| Método | Ruta                | Protegida | Descripción                       |
|--------|---------------------|-----------|-----------------------------------|
| POST   | `/api/auth/register` | ❌        | Crear nuevo usuario               |
| POST   | `/api/auth/login`    | ❌        | Login de usuario y devuelve token |
| GET    | `/api/products`      | ❌        | Obtener todos los productos       |
| POST   | `/api/products`      | ✅        | Crear producto (requiere token)   |
| GET    | `/api/products/:id`  | ❌        | Ver un producto por ID            |
| DELETE | `/api/products/:id`  | ✅        | Eliminar producto por ID          |

---

## 🧠 Aprendizajes clave

Este proyecto me permitió reforzar:

- La conexión entre frontend y backend usando tokens
- Seguridad básica con JWT y middleware de autenticación
- Organización de un proyecto backend profesional
- Validaciones y manejo de errores en APIs RESTful

---

## 👨‍💻 Autor

Desarrollado por [Santiago Eroles](https://www.linkedin.com/in/santiago-alan-eroles-diaz-8ab904127/)