import ApiError from './api-error'

describe('api-error', () => {
  it('should create api error with default props', () => {
    try {
      throw new ApiError()
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('ApiError')
      expect(err.name).toEqual('ApiError')
      expect(err.statusCode).toEqual(500)
    }
  })

  it('should propagate props', () => {
    try {
      throw new ApiError('custom api error message', 401)
    } catch (err) {
      expect(err.originalError).toBeUndefined()
      expect(err.message).toEqual('custom api error message')
      expect(err.statusCode).toEqual(401)
    }
  })
})
