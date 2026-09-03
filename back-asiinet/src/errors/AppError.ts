/**
 * Error estándar de la aplicación. Cualquier error de negocio (usuario ya
 * existe, credenciales inválidas, recurso no encontrado, etc.) debería
 * lanzarse como un AppError en vez de un Error genérico, para que el
 * errorHandler sepa qué status y código HTTP devolver.
 */


export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: string;

  constructor(message: string, statusCode: number, code: string) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.name = "AppError";

    // Necesario para que "instanceof AppError" funcione bien
    // cuando se compila a versiones antiguas de JS.
    Object.setPrototypeOf(this, AppError.prototype);
  }

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