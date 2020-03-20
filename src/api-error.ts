export default class ApiError extends Error {
  statusCode: number
  originalError?: any

  constructor(message?: string, statusCode?: number, originalError?: any) {
    super(message || 'ApiError')

    // Do not send stack trace in production
    const isProduction = process.env.NODE_ENV === 'production'
    if (originalError && 'stack' in originalError) {
      this.stack = isProduction ? undefined : originalError.stack

      if (isProduction) {
        originalError.stack = undefined
      }
    }

    this.name = 'ApiError'
    this.originalError = originalError
    this.statusCode = statusCode || 500
  }
}
