import GatewayTimeoutError from './gateway-timeout-error'

describe('gateway-timeout-error', () => {
  it('should create GatewayTimeoutError with default props', () => {
    try {
      throw new GatewayTimeoutError()
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('Gateway Timeout')
      expect(err.statusCode).toEqual(504)
    }
  })

  it('should propagate props', () => {
    try {
      throw new GatewayTimeoutError('custom api error message')
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('custom api error message')
      expect(err.statusCode).toEqual(504)
    }
  })
})
