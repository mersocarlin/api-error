import UnauthorizedError from './unauthorized-error'

describe('unauthorized-error', () => {
  it('should create UnauthorizedError with default props', () => {
    try {
      throw new UnauthorizedError()
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('Unauthorized')
      expect(err.statusCode).toEqual(401)
    }
  })

  it('should propagate props', () => {
    try {
      throw new UnauthorizedError('custom api error message')
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('custom api error message')
      expect(err.statusCode).toEqual(401)
    }
  })
})
