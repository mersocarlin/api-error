import ApiError from './api-error'

export default class GatewayTimeoutError extends ApiError {
  constructor(message?: string, error?: any) {
    super(message || 'Gateway Timeout', 504, error)
  }
}
