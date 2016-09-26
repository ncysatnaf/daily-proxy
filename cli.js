'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = (0, _yargs2.default)(process.argv.slice(2));

options.alias('p', 'port');

var _options$argv = options.argv;
var _ = _options$argv._;
var port = _options$argv.port;
exports.default = {
  _: _,
  port: port
};