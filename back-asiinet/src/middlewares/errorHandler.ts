import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError.js";

/**
 * Middleware de manejo de errores. Debe registrarse en index.ts DESPUÉS
 * de todas las rutas (app.use(...rutas)) y con 4 parámetros: eso es lo
 * que le indica a Express que es un error handler, no un middleware normal.
 *
 * Estandariza toda respuesta de error con la forma:
 * { status: "error", code: string, message: string }
 */

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  // Errores esperados/de negocio: ya vienen con el status y code correctos.
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      code: err.code,
      message: err.message,
    });
  }

  // Cualquier otro error (bug, excepción no controlada, error de driver, etc.)
  // Se loguea completo en el servidor, pero al cliente nunca se le expone
  // el detalle interno.
  console.error("Error no controlado:", err);

  return res.status(500).json({
    status: "error",
    code: "INTERNAL_SERVER_ERROR",
    message: "Ocurrió un error inesperado en el servidor",
  });
};