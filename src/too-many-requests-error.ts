import ApiError from './api-error'

export default class TooManyRequestsError extends ApiError {
  constructor(message?: string, error?: any) {
    super(message || 'Too Many Requests', 429, error)
  }
}
