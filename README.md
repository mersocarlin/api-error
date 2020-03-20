# @mersocarlin/api-error

Named API errors with original status code and custom message.

## Install

```bash
yarn add @mersocarlin/api-error
```

```bash
npm i @mersocarlin/api-error
```

## Errors included

- BadGateway
- BadRequest
- Conflict
- Forbidden
- GatewayTimeout
- InternalServerError
- MethodNotAllowed
- NotFound
- PaymentRequired
- RequestTimeout
- TooManyRequests
- Unauthorized

## Usage

```ts
import { ApiError, UnauthorizedError } from '@mersocarlin/api-error'


function login(credentials) {
  try {
    await doLogin(credentials)
  } catch (error) {
    throw new UnauthorizedError('Invalid credentials', error)
  }
}

function otherOperation() {
  try {
    ...
  } catch (error) {
    throw new ApiError('Something went wrong', 500, error)
  }
}

```

## API

### `ApiError`

| Prop          | Type   | Default  | Description                                               |
| ------------- | ------ | -------- | --------------------------------------------------------- |
| message       | String | ApiError | Message that describes the type of error                  |
| statusCode    | Number | 500      | Status code                                               |
| originalError | Object |          | Original error thrown (from try/catch, promise reject...) |

### `BadGatewayError`

| Prop          | Type   | Default     | Description                                               |
| ------------- | ------ | --------    | --------------------------------------------------------- |
| message       | String | Bad Gateway | Message that describes the type of error                  |
| error         | Object |             | Original error thrown (from try/catch, promise reject...) |

**Note**: Same applies for all other error types.