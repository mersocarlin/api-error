import ApiError from './api-error'

export default class InternalServerError extends ApiError {
  constructor(message?: string, error?: any) {
    super(message || 'Internal Server Error', 500, error)
  }
}
