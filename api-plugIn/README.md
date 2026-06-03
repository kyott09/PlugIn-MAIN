# Backend — Node.js + Express

## Instalación

1. Copiar el archivo de entorno:
```bash
   cp .env.example .env
```
2. Completar las variables en `.env`
3. Instalar dependencias:
```bash
   npm install
```
4. Iniciar el servidor:
```bash
   node index.js
```

## Instrucciones de desarrollo

- **Variables y rutas:** `camelCase` → `userId`, `/api/getUser`
- **Modelos y clases:** `PascalCase` → `UserModel`, `AuthService`
- **Variables de entorno:** `MAYÚSCULAS` → `JWT_SECRET`, `DATABASE_URL`

## Tecnologías clave

| Librería | Uso |
|---|---|
| `prisma` | ORM para base de datos |
| `zod` | Validación de esquemas |
| `jsonwebtoken` | Autenticación con JWT |
| `bcrypt` | Hash de contraseñas |
| `cors` | Manejo de CORS |
| `dotenv` | Variables de entorno |
