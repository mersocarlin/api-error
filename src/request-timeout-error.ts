import ApiError from './api-error'

export default class RequestTimeoutError extends ApiError {
  constructor(message?: string, error?: any) {
    super(message || 'Request Timeout', 408, error)
  }
}
