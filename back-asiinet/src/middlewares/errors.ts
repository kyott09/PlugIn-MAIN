// Este archivo tiene 3 cosas adentro:
//   1. AppError        -> una clase para "armar" errores con status y código
//   2. notFoundHandler  -> qué hacer cuando piden una ruta que no existe
//   3. errorHandler     -> el que arma la respuesta final que recibe el cliente

import { NextFunction, Request, Response } from "express";

// -----------------------------------------------------------------------
// 1. AppError
// -----------------------------------------------------------------------
// Un Error normal de JavaScript solo tiene un mensaje (message).
// Nosotros necesitamos más datos: el número HTTP (statusCode) y una
// palabra clave (code) para identificar el tipo de error.
//
// Por eso creamos nuestra propia clase que "hereda" de Error
// (extends Error) y le agrega esos dos datos extra.
export class AppError extends Error {
  public readonly statusCode: number; // ej: 404, 401, 500
  public readonly code: string;       // ej: "NOT_FOUND", "UNAUTHORIZED"

  constructor(message: string, statusCode: number, code: string) {
    super(message); // esto le pasa el mensaje al Error normal de JS
    this.statusCode = statusCode;
    this.code = code;
    this.name = "AppError";

    // Esta línea es un detalle técnico necesario para que
    // "if (error instanceof AppError)" funcione bien más abajo.
    Object.setPrototypeOf(this, AppError.prototype);
  }

  // Estos son "atajos". En vez de escribir cada vez:
  //   throw new AppError("mensaje", 404, "NOT_FOUND")
  // podés escribir simplemente:
  //   throw AppError.notFound("mensaje")
  // y ya queda el status y el code correctos, sin tener que
  // acordarte del número HTTP a mano.

  static badRequest(message: string, code = "BAD_REQUEST") {
    return new AppError(message, 400, code);
  }

  static unauthorized(message: string, code = "UNAUTHORIZED") {
    return new AppError(message, 401, code);
  }

  static forbidden(message: string, code = "FORBIDDEN") {
    return new AppError(message, 403, code);
  }

  static notFound(message: string, code = "NOT_FOUND") {
    return new AppError(message, 404, code);
  }

  static conflict(message: string, code = "CONFLICT") {
    return new AppError(message, 409, code);
  }

  static internal(message: string, code = "INTERNAL_SERVER_ERROR") {
    return new AppError(message, 500, code);
  }
}

// -----------------------------------------------------------------------
// 2. notFoundHandler
// -----------------------------------------------------------------------
// Este middleware se registra AL FINAL de todas las rutas en index.ts.
// Si una petición llega hasta acá, significa que ninguna ruta la
// "atrapó" antes (por ejemplo, alguien pidió una URL que no existe).
//
// Lo único que hace es crear un AppError de tipo 404 y pasárselo
// a next(), que es lo que hace que Express lo mande derecho
// a errorHandler (el siguiente bloque de este archivo).
export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  next(AppError.notFound(`Ruta no encontrada: ${req.method} ${req.originalUrl}`));
};

// -----------------------------------------------------------------------
// 3. errorHandler
// -----------------------------------------------------------------------
// Este es el middleware que se encarga de responder al cliente
// cuando algo salió mal, sin importar en qué parte del código
// haya pasado el error.
//
// OJO: tiene que tener exactamente estos 4 parámetros
// (err, req, res, next), aunque "next" no se use nunca adentro.
// Express reconoce que "esto es un manejador de errores"
// justamente por tener 4 parámetros en vez de 3.
//
// Se registra en index.ts DESPUÉS de todas las rutas y
// DESPUÉS de notFoundHandler. Tiene que ser lo último.
export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction // no se usa, pero tiene que estar igual
) => {
  // Caso 1: es un error que nosotros mismos creamos a propósito
  // (por ejemplo, con AppError.unauthorized(...) en un service).
  // Como ya sabemos el status y el code, los usamos directamente.
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      code: err.code,
      message: err.message,
    });
  }

  // Caso 2: es cualquier otro error que NO esperábamos
  // (un bug, un error de una librería, algo raro).
  // Lo mostramos en la consola del servidor para poder
  // investigarlo nosotros, pero al cliente NUNCA le mandamos
  // el detalle interno — solo un mensaje genérico con status 500.
  console.error("Error no controlado:", err);

  return res.status(500).json({
    status: "error",
    code: "INTERNAL_SERVER_ERROR",
    message: "Ocurrió un error inesperado en el servidor",
  });
};