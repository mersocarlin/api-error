import ApiError from './api-error'

export default class MethodNotAllowedError extends ApiError {
  constructor(message?: string, error?: any) {
    super(message || 'Method Not Allowed', 405, error)
  }
}
