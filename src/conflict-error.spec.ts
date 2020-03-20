import ConflictError from './conflict-error'

describe('conflict-error', () => {
  it('should create ConflictError with default props', () => {
    try {
      throw new ConflictError()
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('Conflict')
      expect(err.statusCode).toEqual(409)
    }
  })

  it('should propagate props', () => {
    try {
      throw new ConflictError('custom api error message')
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('custom api error message')
      expect(err.statusCode).toEqual(409)
    }
  })
})
