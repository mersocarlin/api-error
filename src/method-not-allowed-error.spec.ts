import MethodNotAllowedError from './method-not-allowed-error'

describe('method-not-allowed-error', () => {
  it('should create MethodNotAllowedError with default props', () => {
    try {
      throw new MethodNotAllowedError()
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('Method Not Allowed')
      expect(err.statusCode).toEqual(405)
    }
  })

  it('should propagate props', () => {
    try {
      throw new MethodNotAllowedError('custom api error message')
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('custom api error message')
      expect(err.statusCode).toEqual(405)
    }
  })
})
