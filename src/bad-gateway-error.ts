import ApiError from './api-error'

export default class BadGatewayError extends ApiError {
  constructor(message?: string, error?: any) {
    super(message || 'Bad Gateway', 502, error)
  }
}
