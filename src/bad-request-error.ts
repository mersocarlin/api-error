import ApiError from './api-error'

export default class BadRequestError extends ApiError {
  constructor(message?: string, error?: any) {
    super(message || 'Bad Request', 400, error)
  }
}
