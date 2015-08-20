/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-2-example',
    environment: environment,
    baseURL: '/ember-2-example',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        'ember-htmlbars-component-generation': true,
        'ember-routing-routable-components': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/ember-2-example';
    ENV['ember-cli-mirage'] = {
      enabled: true
    };
  }

  return ENV;
};
