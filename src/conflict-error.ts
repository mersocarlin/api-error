import ApiError from './api-error'

export default class ConflictError extends ApiError {
  constructor(message?: string, error?: any) {
    super(message || 'Conflict', 409, error)
  }
}
