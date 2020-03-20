import NotFoundError from './not-found-error'

describe('not-found-error', () => {
  it('should create NotFoundError with default props', () => {
    try {
      throw new NotFoundError()
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('Not Found')
      expect(err.statusCode).toEqual(404)
    }
  })

  it('should propagate props', () => {
    try {
      throw new NotFoundError('custom api error message')
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('custom api error message')
      expect(err.statusCode).toEqual(404)
    }
  })
})
