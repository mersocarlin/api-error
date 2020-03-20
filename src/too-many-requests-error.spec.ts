import TooManyRequestsError from './too-many-requests-error'

describe('too-many-requests-error', () => {
  it('should create TooManyRequestsError with default props', () => {
    try {
      throw new TooManyRequestsError()
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('Too Many Requests')
      expect(err.statusCode).toEqual(429)
    }
  })

  it('should propagate props', () => {
    try {
      throw new TooManyRequestsError('custom api error message')
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('custom api error message')
      expect(err.statusCode).toEqual(429)
    }
  })
})
