# JWT Handler

Secure JWT generation and validation. Ferrow agent authentication.

```javascript
const jwt = new JWTHandler(secret);
const token = jwt.sign({ userId: 123 });
const verified = jwt.verify(token);
```

## Features
- ✓ HS256/RS256 support
- ✓ Expiration handling
- ✓ Refresh tokens
- ✓ Ferrow auth middleware

## License: MIT
