// Register babel to transpile our code before our tests run
require('babel-register')();

//Disable webpack feautures that Mocha doesnt understand

require.extensions['.css'] = function() {};
