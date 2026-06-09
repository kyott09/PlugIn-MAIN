# PlugIn Project 🔌

Proyecto fullstack moderno con arquitectura escalable basada en **Node.js + Express** para el backend y **React + Vite** para el frontend.

## 📋 Descripción General

Este es un proyecto monorepo que contiene dos aplicaciones principales:

- **API Backend**: Servidor REST con Express, Prisma ORM, autenticación JWT y validación con Zod
- **Frontend**: Aplicación web moderna con React 19, Vite, TailwindCSS y manejo de estado con Zustand

## 🏗️ Estructura del Proyecto

```
PlugIn-MAIN/
├── api-plugIn/          # Backend API (Express + Prisma + JWT)
│   ├── src/
│   ├── package.json
│   ├── .env_example
│   └── README.md
├── app-plugIn/          # Frontend (React + Vite)
│   ├── plugIn/
│   ├── package.json
│   └── README.md
└── README.md            # Este archivo
```

## 🚀 Quick Start

### Backend (API)

```bash
cd api-plugIn
cp .env_example .env
npm install
npm start  # o npm run dev
```

**Puerto por defecto**: `5000` (configurable en `.env`)

### Frontend (React)

```bash
cd app-plugIn/plugIn
npm install
npm run dev
```

**URL por defecto**: `http://localhost:5173`

## 📦 Tecnologías Principales

### Backend
- **Express** - Framework web minimalista
- **Prisma** - ORM para base de datos
- **JWT** - Autenticación basada en tokens
- **Zod** - Validación de esquemas TypeScript-safe
- **CORS** - Control de acceso entre dominios
- **Nodemon** - Recarga automática en desarrollo

### Frontend
- **React 19** - Librería UI moderna
- **Vite** - Bundler ultrarrápido
- **TailwindCSS** - Framework de CSS utilitario
- **Zustand** - Manejo de estado global ligero
- **Axios** - Cliente HTTP
- **React Router** - Navegación entre rutas
- **Yup** - Validación de formularios

## 🔧 Configuración

### Variables de Entorno Backend

Copiar `.env_example` a `.env` y completar:

```env
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/plugin_db
DB_NAME=plugin_db
JWT_SECRET=tu_secreto_super_seguro_aqui
```

## 📖 Documentación

- [Backend Documentation](./api-plugIn/README.md)
- [Frontend Documentation](./app-plugIn/README.md)
- [App Vite Documentation](./app-plugIn/plugIn/README.md)

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
```javascript
class UserModel { }
class AuthService { }
```

## 🔐 Seguridad

- ✅ Autenticación con JWT
- ✅ Validación de entrada con Zod
- ✅ CORS configurado
- ✅ Variables de entorno protegidas
- ✅ Hash de contraseñas (Bcrypt recomendado)

## 🧪 Testing

### Backend
```bash
cd api-plugIn
npm test
```

### Frontend
```bash
cd app-plugIn/plugIn
npm test
```

## 📝 Scripts Disponibles

### Backend
- `npm start` - Inicia el servidor en producción
- `npm run dev` - Inicia con nodemon para desarrollo

### Frontend
- `npm run dev` - Servidor de desarrollo con HMR
- `npm run build` - Build optimizado para producción
- `npm run preview` - Previsualiza el build
- `npm run lint` - Ejecuta ESLint

## 🤝 Contribuir

1. Crear una rama feature: `git checkout -b feature/nombre`
2. Commit cambios: `git commit -m 'feat: descripción'`
3. Push a la rama: `git push origin feature/nombre`
4. Abrir Pull Request

## 📄 Licencia

ISC

## 👤 Autor

Tobía - 2026

---

**Última actualización**: 09 de Junio, 2026