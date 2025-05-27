const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://YOUR_AUTH0_DOMAIN/.well-known/jwks.json`
  }),
  audience: 'YOUR_API_IDENTIFIER',
  issuer: `https://YOUR_AUTH0_DOMAIN/`,
  algorithms: ['RS256']
});

module.exports = checkJwt;