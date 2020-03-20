import PaymentRequiredError from './payment-required-error'

describe('payment-required-error', () => {
  it('should create PaymentRequiredError with default props', () => {
    try {
      throw new PaymentRequiredError()
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('Payment Required')
      expect(err.statusCode).toEqual(402)
    }
  })

  it('should propagate props', () => {
    try {
      throw new PaymentRequiredError('custom api error message')
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('custom api error message')
      expect(err.statusCode).toEqual(402)
    }
  })
})
