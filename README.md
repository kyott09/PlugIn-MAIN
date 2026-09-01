# Asiinet 🔌

Proyecto fullstack moderno con arquitectura escalable basada en **Node.js + Express + TypeScript** para el backend y **React + Vite** para el frontend.

> Anteriormente conocido como **PlugIn**.

## 📋 Descripción General

Este es un proyecto monorepo que contiene dos aplicaciones principales:

- **Backend (API)**: Servidor REST con Express, TypeORM (MySQL), autenticación JWT, hash de contraseñas con Bcrypt y validación con Zod
- **Frontend**: Aplicación web con React 19, Vite, React Router y Font Awesome

## 🏗️ Estructura del Proyecto

```
Asiinet/
├── back-asiinet/                # Backend API (Express + TypeORM + JWT)
│   ├── src/
│   │   ├── database/
│   │   │   └── data-source.ts   # Configuración de conexión TypeORM (MySQL)
│   │   ├── modules/
│   │   │   └── user/            # Módulo de usuario (entity, repository, service, controller, routes)
│   │   └── index.ts             # Punto de entrada del servidor
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env_example
│   └── README.md
├── front-asiinet/                # Frontend (React + Vite)
│   ├── asiinet/
│   │   ├── src/
│   │   │   ├── pages/            # Home, Login, Register, Users
│   │   │   ├── routes/           # AppRoutes.jsx (React Router)
│   │   │   ├── components/       # UserList.jsx, etc.
│   │   │   └── assets/
│   │   └── package.json
│   ├── (README-no listo).md
│   └── README.md
└── README.md                     # Este archivo
```

## 🚀 Quick Start

### Backend (API)

```bash
cd back-asiinet
cp .env_example .env
npm install
npm run dev   # con nodemon + tsx (recarga automática)
# o
npm start     # ejecución directa con tsx
```

**Puerto por defecto**: `8080` (configurable en `.env`)

### Frontend (React)

```bash
cd front-asiinet/asiinet
npm install
npm run dev
```

**URL por defecto**: `http://localhost:5173`

## 📦 Tecnologías Principales

### Backend
- **Express 5** - Framework web minimalista
- **TypeScript** - Tipado estático (ejecutado con `tsx`)
- **TypeORM** - ORM para base de datos
- **MySQL2** - Driver de base de datos MySQL
- **JWT (jsonwebtoken)** - Autenticación basada en tokens
- **Bcrypt** - Hash de contraseñas
- **Zod** - Validación de esquemas
- **CORS** - Control de acceso entre dominios
- **Nodemon** - Recarga automática en desarrollo

### Frontend
- **React 19** - Librería UI moderna
- **Vite** - Bundler ultrarrápido
- **React Router DOM** - Navegación entre rutas
- **Font Awesome** - Íconos

## 🔧 Configuración

### Variables de Entorno Backend

Copiar `.env_example` a `.env` y completar:

```env
PORT=8080
SECRET_KEY=mi_clave_secreta

DB_HOST=localhost
DB_PORT=3306
DB_NAME=empresa_db
DB_USER=root
DB_PASS=

JWT_SECRET=1234
JWT_EXPIRES_IN=1h
```

## 🌐 Endpoints Disponibles

### Usuarios (`/api/users`)
| Método | Ruta                  | Descripción                          |
|--------|-----------------------|---------------------------------------|
| POST   | `/api/users/register` | Registra un nuevo usuario             |
| POST   | `/api/users/login`    | Inicia sesión y devuelve un JWT       |

## 🧭 Rutas del Frontend

| Ruta         | Página     |
|--------------|------------|
| `/`          | Login      |
| `/login`     | Login      |
| `/register`  | Register   |
| `/home`      | Home       |
| `/users`     | Users      |

## 📖 Documentación

- [Backend Documentation](./back-asiinet/README.md)
- [Frontend Documentation](./front-asiinet/README.md)
- [App Vite Documentation](./front-asiinet/asiinet/README.md)

## 🎨 Convenciones de Código

### Variables y Funciones
```javascript
const userId = 123;
function getUserData() { }
const handleSubmit = () => { };
```

### Componentes React
```jsx
function UserCard() { }
const LoginForm = () => { };
```

### Clases CSS
```css
.user-card { }
.login-form { }
.btn-primary { }
```

### Modelos/Clases Backend
```typescript
class UserModel { }
class AuthService { }
```

## 🔐 Seguridad

- ✅ Autenticación con JWT
- ✅ Hash de contraseñas con Bcrypt
- ✅ Validación de entrada con Zod
- ✅ CORS configurado
- ✅ Variables de entorno protegidas

## 🧪 Testing

### Backend
```bash
cd back-asiinet
npm test
```

### Frontend
```bash
cd front-asiinet/asiinet
npm test
```

## 📝 Scripts Disponibles

### Backend
- `npm start` - Ejecuta el servidor con `tsx`
- `npm run dev` - Inicia con nodemon + tsx para desarrollo
- `npm test` - Placeholder de tests (aún no implementado)

### Frontend
- `npm run dev` - Servidor de desarrollo con HMR
- `npm run build` - Build optimizado para producción
- `npm run preview` - Previsualiza el build
- `npm run lint` - Ejecuta ESLint

---

**Última actualización**: 01 de Septiembre, 2026
