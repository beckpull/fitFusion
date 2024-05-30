const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
// require('dotenv').config();

// set token secret and expiration date
const secret = 'mysecretssshhhhhh';
// process.env.AUTH_SECRET;
const expiration = '2h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  // function for our authenticated routes
  authMiddleware: function ({ req }) {

    // console.log("This is the req: ", req);

    // allows token to be sent via req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
    // console.log("First : ", token);
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
      // console.log("Second : ", token);
    }

    if (!token) {
      console.log('No token provided:');
      return req;
    }

    console.log('Token received: ', token);


    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
      console.log('Data: ', data);

    } catch {
      console.log('Invalid token:');
    }

    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    const token = jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    console.log('SignToken: ', token);
    return token;
  },
};
