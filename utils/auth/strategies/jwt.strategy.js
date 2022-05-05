const { Strategy, ExtractJwt } = require('passport-jwt');
const { config } = require('../../../config/config');

const opstions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
}

const JwtStrategy = new Strategy(opstions, (payload, done) => {
  return done(null, payload)
});


module.exports = JwtStrategy;