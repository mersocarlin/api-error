import BadRequestError from './bad-request-error'

describe('bad-request-error', () => {
  it('should create BadRequestError with default props', () => {
    try {
      throw new BadRequestError()
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('Bad Request')
      expect(err.statusCode).toEqual(400)
    }
  })

  it('should propagate props', () => {
    try {
      throw new BadRequestError('custom api error message')
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('custom api error message')
      expect(err.statusCode).toEqual(400)
    }
  })
})
