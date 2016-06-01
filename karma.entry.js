// Specify platform and application providers
var browser = require('@angular/platform-browser/testing');
var testing = require('@angular/core/testing');

testing.setBaseTestProviders(
  browser.TEST_BROWSER_STATIC_PLATFORM_PROVIDERS,
  browser.TEST_BROWSER_STATIC_APPLICATION_PROVIDERS
);

// Turn on full stack traces in errors to help debugging
Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// Recursively discover all spec files
var context = require.context('./src', true, /\.spec\.ts/);

// Load discovered spec files
context.keys().forEach(context);
