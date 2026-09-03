import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError.js";

/**
 * Se registra DESPUÉS de todas las rutas y ANTES de errorHandler.
 * Si una petición no coincidió con ninguna ruta definida, cae acá,
 * y se lo pasa a errorHandler ya convertido en un AppError 404
 * con el mismo formato estándar que cualquier otro error.
 */

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  next(AppError.notFound(`Ruta no encontrada: ${req.method} ${req.originalUrl}`));
};