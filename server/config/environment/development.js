'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://tester:gotest@ds153637.mlab.com:53637/githubapi'
  },

  // Seed database on startup
  seedDB: false

};
