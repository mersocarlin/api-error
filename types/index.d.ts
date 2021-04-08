export class ApiError extends Error {
  statusCode: number
  originalError?: any
  constructor(message?: string, statusCode?: number, originalError?: any)
}

export class BadGatewayError extends ApiError {
  constructor(message?: string, error?: any)
}

export class BadRequestError extends ApiError {
  constructor(message?: string, error?: any)
}

export class ConflictError extends ApiError {
  constructor(message?: string, error?: any)
}

export class ForbiddenError extends ApiError {
  constructor(message?: string, error?: any)
}

export class GatewayTimeoutError extends ApiError {
  constructor(message?: string, error?: any)
}

export class InternalServerError extends ApiError {
  constructor(message?: string, error?: any)
}

export class MethodNotAllowedError extends ApiError {
  constructor(message?: string, error?: any)
}

export class NotFoundError extends ApiError {
  constructor(message?: string, error?: any)
}

export class PaymentRequiredError extends ApiError {
  constructor(message?: string, error?: any)
}

export class RequestTimeoutError extends ApiError {
  constructor(message?: string, error?: any)
}

export class TooManyRequestsError extends ApiError {
  constructor(message?: string, error?: any)
}

export class UnauthorizedError extends ApiError {
  constructor(message?: string, error?: any)
}
