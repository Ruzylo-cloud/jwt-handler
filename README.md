# JWT Handler

Minimal JWT generation and validation using HMAC-SHA256 (HS256).

```javascript
const jwt = new JWTHandler(secret);
const token = jwt.sign({ userId: 123 });
const verified = jwt.verify(token);
```

## Features
- HS256 signing and verification
- Expiration handling

## License: MIT

Sponsored by [Ferrow](https://ferrow.ai)

---
Part of the [ferrow-toolkit](https://github.com/FerrowAI/ferrow-toolkit) collection · Sponsored by [Ferrow](https://ferrow.ai)
