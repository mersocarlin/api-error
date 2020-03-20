import ApiError from './api-error'

export default class PaymentRequiredError extends ApiError {
  constructor(message?: string, error?: any) {
    super(message || 'Payment Required', 402, error)
  }
}
