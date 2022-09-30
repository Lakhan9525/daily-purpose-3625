const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID='344503366982-cq6qtrhasonhpnb0j4n9nn1u67jlqso1.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET='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';
const FACEBOOK_APP_ID='480133660704030';
const FACEBOOK_APP_SECRET='480133660704030';
const passport=require('passport');

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    cb(null,profile)
  }
));
passport.serializeUser((user,cb)=>{
    cb(null,user);
})
passport.deserializeUser((user,cb)=>{
    cb(null,user);
})