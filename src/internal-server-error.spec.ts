import InternalServerError from './internal-server-error'

describe('internal-server-error', () => {
  it('should create InternalServerError with default props', () => {
    try {
      throw new InternalServerError()
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('Internal Server Error')
      expect(err.statusCode).toEqual(500)
    }
  })

  it('should propagate props', () => {
    try {
      throw new InternalServerError('custom api error message')
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('custom api error message')
      expect(err.statusCode).toEqual(500)
    }
  })
})
