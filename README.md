# Asiinet Project 🔌

Proyecto fullstack con una arquitectura modular para un sistema de gestión de usuarios y autenticación, desarrollada con **Node.js + Express** en el backend y **React + Vite** en el frontend.

## 📋 Descripción General

Este monorepo incluye dos aplicaciones principales:

- **Backend**: API REST desarrollada con Express, TypeScript, TypeORM, JWT y validación con Zod.
- **Frontend**: Aplicación web en React con Vite, enrutamiento con React Router y estructura de páginas y componentes para la interfaz de usuario.

## 🏗️ Estructura del Proyecto

```bash
Asiinet-MAIN/
├── back-asiinet/                  # Backend API
│   ├── src/
│   ├── .env
│   ├── .env_example
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── front-asiinet/                # Frontend app
│   ├── asiinet/
│   │   ├── src/
│   │   ├── public/
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   ├── eslint.config.js
│   │   └── README.md
│   └── (README-no listo).md
├── package-lock.json
└── README.md                     # Este archivo
```

## 🚀 Inicio Rápido

### Backend

```bash
cd back-asiinet
cp .env_example .env
npm install
npm run dev
```

O, si prefieres iniciar directamente:

```bash
npm start
```

**Puerto por defecto**: `8080` (configurable desde `.env`)

### Frontend

```bash
cd front-asiinet/asiinet
npm install
npm run dev
```

**URL por defecto**: `http://localhost:5173`

## 📦 Tecnologías Principales

### Backend
- **Node.js** - Entorno de ejecución del servidor
- **Express** - Framework web para APIs
- **TypeScript** - Tipado estático para JavaScript
- **TypeORM** - ORM para conexión con bases de datos relacionales
- **MySQL** - Base de datos principal
- **JWT** - Autenticación basada en tokens
- **Zod** - Validación de datos y esquemas
- **CORS** - Control de acceso entre dominios
- **Nodemon** - Reinicio automático en desarrollo

### Frontend
- **React 19** - Biblioteca para interfaces de usuario
- **Vite** - Herramienta rápida de desarrollo y build
- **React Router DOM** - Enrutamiento de la aplicación
- **ESLint** - Linting del código
- **Font Awesome** - Iconografía
- **CSS modular / estilos básicos** - Personalización visual de la interfaz

## 🔧 Configuración de Variables de Entorno

Se debe crear un archivo `.env` a partir de `.env_example` dentro de `back-asiinet`.

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

## 📖 Documentación

- [Backend README](./back-asiinet/README.md)
- [Frontend README](./front-asiinet/asiinet/README.md)

## 🧩 Funcionalidades

- Registro y gestión de usuarios
- Autenticación con JWT
- Conexión a base de datos relacional con TypeORM
- Estructura modular en rutas, servicios y entidades
- Interfaz de usuario con páginas para autenticación y administración

## 🔐 Seguridad

- ✅ Autenticación basada en JWT
- ✅ Validación de entradas con Zod
- ✅ CORS habilitado para llamadas HTTP desde el frontend
- ✅ Variables de entorno protegidas
- ✅ Uso de contraseñas con hash mediante bcrypt en el backend

## 📝 Scripts Disponibles

### Backend
- `npm run dev` - Inicia la API en modo desarrollo con nodemon
- `npm start` - Ejecuta la aplicación con TypeScript directo

### Frontend
- `npm run dev` - Levanta el servidor de desarrollo de Vite
- `npm run build` - Genera la build de producción
- `npm run preview` - Previsualiza la aplicación compilada
- `npm run lint` - Ejecuta ESLint para revisar el código

## 🤝 Contribuir

1. Crear una rama para la funcionalidad: `git checkout -b feature/nombre`
2. Realizar los cambios y confirmar con commit: `git commit -m "feat: descripción"`
3. Subir la rama: `git push origin feature/nombre`
4. Abrir un Pull Request para revisión

## 📄 Licencia

ISC

## 👤 Autor

Tobía - 2026

---

Última actualización: 01 de Septiembre de 2026