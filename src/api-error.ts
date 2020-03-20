export default class ApiError extends Error {
  statusCode: number
  originalError?: any

  constructor(message?: string, statusCode?: number, error?: any) {
    super(message || 'ApiError')

    // Do not send stack trace in production
    const isProduction = process.env.NODE_ENV === 'production'
    if (error && 'stack' in error) {
      this.stack = isProduction ? undefined : error.stack

      if (isProduction) {
        error.stack = undefined
      }
    }

    this.name = 'ApiError'
    this.originalError = error
    this.statusCode = statusCode || 500
  }
}
