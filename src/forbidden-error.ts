import ApiError from './api-error'

export default class ForbiddenError extends ApiError {
  constructor(message?: string, error?: any) {
    super(message || 'Forbidden', 403, error)
  }
}
