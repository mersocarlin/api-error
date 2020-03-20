import ApiError from './api-error'

export default class NotFoundError extends ApiError {
  constructor(message?: string, error?: any) {
    super(message || 'Not Found', 404, error)
  }
}
