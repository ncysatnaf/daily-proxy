'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(opts) {
    var url, result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = opts.url;
            _context.next = 3;
            return (0, _requestPromise2.default)(url);

          case 3:
            result = _context.sent;
            return _context.abrupt('return', result);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function request(_x) {
    return _ref.apply(this, arguments);
  };
}();

var onRequest = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res) {
    var _url$parse, query, result;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _url$parse = _url2.default.parse(req.url);
            query = _url$parse.query;
            _context2.next = 4;
            return request({ url: query });

          case 4:
            result = _context2.sent;

            if (result) {
              setHeader(res);
              res.write(result);
              res.end();
            }

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function onRequest(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var setHeader = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(res, opts) {
    var _ref4, _ref4$ContentType, ContentType;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref4 = opts || {};
            _ref4$ContentType = _ref4.ContentType;
            ContentType = _ref4$ContentType === undefined ? 'application/json' : _ref4$ContentType;

            res.setHeader('Access-Control-Allow-Origin', '*');
            res.writeHeader(200, { 'Content-Type': ContentType });

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function setHeader(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

_http2.default.createServer(onRequest).listen(8000, function () {
  console.log('server running on 8000 port');
});
