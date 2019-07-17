require('ignore-styles');
require("babel-polyfill");

require('babel-register')({
    ignore: [ /(node_modules)/ ],
    presets: ['env', 'react']
});

require('./server');
