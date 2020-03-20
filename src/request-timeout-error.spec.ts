import RequestTimeoutError from './request-timeout-error'

describe('request-timeout-error', () => {
  it('should create RequestTimeoutError with default props', () => {
    try {
      throw new RequestTimeoutError()
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('Request Timeout')
      expect(err.statusCode).toEqual(408)
    }
  })

  it('should propagate props', () => {
    try {
      throw new RequestTimeoutError('custom api error message')
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('custom api error message')
      expect(err.statusCode).toEqual(408)
    }
  })
})
