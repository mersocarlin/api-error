import ForbiddenError from './forbidden-error'

describe('forbidden-error', () => {
  it('should create ForbiddenError with default props', () => {
    try {
      throw new ForbiddenError()
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('Forbidden')
      expect(err.statusCode).toEqual(403)
    }
  })

  it('should propagate props', () => {
    try {
      throw new ForbiddenError('custom api error message')
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('custom api error message')
      expect(err.statusCode).toEqual(403)
    }
  })
})
