import ApiError from './api-error'

export default class UnauthorizedError extends ApiError {
  constructor(message?: string, error?: any) {
    super(message || 'Unauthorized', 401, error)
  }
}
