import BadGatewayError from './bad-gateway-error'

describe('bad-gateway-error', () => {
  it('should create BadGatewayError with default props', () => {
    try {
      throw new BadGatewayError()
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('Bad Gateway')
      expect(err.statusCode).toEqual(502)
    }
  })

  it('should propagate props', () => {
    try {
      throw new BadGatewayError('custom api error message')
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('custom api error message')
      expect(err.statusCode).toEqual(502)
    }
  })
})
