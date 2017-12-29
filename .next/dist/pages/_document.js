'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _colors = require('../styles/colors');

var _colors2 = _interopRequireDefault(_colors);

var _emotionServer = require('emotion-server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matt/development/mhme/pages/_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', { className: 'avenir', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('meta', { charset: 'UTF-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement('meta', { name: 'theme-color', content: _colors2.default.a, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/src/hljs-ocean.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/src/tachyons.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, '\n           :root {\n            --a: ' + _colors2.default.a + ';\n            --a-muted: ' + _colors2.default.aMuted + ';\n            --b: ' + _colors2.default.b + ';\n            --b-muted: ' + _colors2.default.bMuted + ';\n            --c: ' + _colors2.default.c + ';\n            --c-muted: ' + _colors2.default.cMuted + ';\n\n            --d: ' + _colors2.default.d + ';\n            --d-muted: ' + _colors2.default.dMuted + ';\n\n\n            --gray: ' + _colors2.default.gray + ';\n            --gray-muted: ' + _colors2.default.grayMuted + ';\n            --light-gray: ' + _colors2.default.lightGray + ';\n            --white: ' + _colors2.default.white + ';\n            --black: ' + _colors2.default.black + ';\n\n            --fonts: -apple-system,\n                      BlinkMacSystemFont,\n                      Roboto,\n                      Oxygen-Sans,\n                      Ubuntu,\n                      Cantarell,\n                      sans-serif;\n            --font-size: 18px;\n\n            --width: 45rem;\n            --width-s: 30rem;\n          }\n\n\n          *, *::after, *::before {\n            box-sizing: inherit;\n            margin: 0;\n            padding: 0;\n          }\n          html {\n            box-sizing: border-box;\n            font-family: var(--fonts);\n            font-size: var(--font-size);\n            transition: background-color 1s, color 1s;\n          }'), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: this.props.css }, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head,
          errorHtml = _renderPage.errorHtml,
          chunks = _renderPage.chunks;

      var emotionStyles = (0, _emotionServer.extractCritical)(html);
      return (0, _extends3.default)({ html: html, head: head, errorHtml: errorHtml, chunks: chunks }, emotionStyles);
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkRvY3VtZW50IiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiY29sb3JzIiwiZXh0cmFjdENyaXRpY2FsIiwiTXlEb2N1bWVudCIsImEiLCJhTXV0ZWQiLCJiIiwiYk11dGVkIiwiYyIsImNNdXRlZCIsImQiLCJkTXV0ZWQiLCJncmF5IiwiZ3JheU11dGVkIiwibGlnaHRHcmF5Iiwid2hpdGUiLCJibGFjayIsIl9faHRtbCIsInByb3BzIiwiY3NzIiwicmVuZGVyUGFnZSIsImh0bWwiLCJoZWFkIiwiZXJyb3JIdG1sIiwiY2h1bmtzIiwiZW1vdGlvblN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWSxBQUFNLEFBQU07Ozs7QUFDL0IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVM7Ozs7Ozs7SSxBQUVZOzs7Ozs7Ozs7Ozs2QkFNVixBQUNQOzZCQUNFLGNBQUEsVUFBTSxXQUFOLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxpREFDUSxTQUFOLEFBQWM7b0JBQWQ7c0JBREYsQUFDRSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLGVBQWMsU0FBUyxpQkFBbEMsQUFBeUM7b0JBQXpDO3NCQUZGLEFBRUUsQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO29CQUE5QjtzQkFIRixBQUdFLEFBQ0E7QUFEQTtrREFDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtvQkFBNUI7c0JBSkYsQUFJRSxBQUNBO0FBREE7a0RBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7b0JBQTVCO3NCQUxGLEFBS0UsQUFDQTtBQURBOzBCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxxREFHUyxpQkFIVCxBQUdnQixtQ0FDRCxpQkFKZixBQUlzQixrQ0FDYixpQkFMVCxBQUtnQixtQ0FDRCxpQkFOZixBQU1zQixrQ0FDYixpQkFQVCxBQU9nQixtQ0FDRCxpQkFSZixBQVFzQixvQ0FFYixpQkFWVCxBQVVnQixtQ0FDRCxpQkFYZixBQVdzQix5Q0FHVixpQkFkWixBQWNtQix5Q0FDRCxpQkFmbEIsQUFleUIsOENBQ1AsaUJBaEJsQixBQWdCeUIseUNBQ1osaUJBakJiLEFBaUJvQixxQ0FDUCxpQkFsQmIsQUFrQm9CLFFBeEJ0QixBQU1FLEFBOENBLHl1QkFBTyx5QkFBeUIsRUFBRSxRQUFRLEtBQUEsQUFBSyxNQUEvQyxBQUFnQyxBQUFxQjtvQkFBckQ7c0JBckRKLEFBQ0UsQUFvREUsQUFFRjtBQUZFOzJCQUVGLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBMUROLEFBQ0UsQUF1REUsQUFFRSxBQUlQO0FBSk87QUFBQTs7OzswQ0FoRStCO1VBQWQsQUFBYyxrQkFBZCxBQUFjOzt3QkFBQSxBQUNLO1VBREwsQUFDN0IsbUJBRDZCLEFBQzdCO1VBRDZCLEFBQ3ZCLG1CQUR1QixBQUN2QjtVQUR1QixBQUNqQix3QkFEaUIsQUFDakI7VUFEaUIsQUFDTixxQkFETSxBQUNOLEFBQy9COztVQUFNLGdCQUFnQixvQ0FBdEIsQUFBc0IsQUFBZ0IsQUFDdEM7c0NBQVMsTUFBVCxNQUFlLE1BQWYsTUFBcUIsV0FBckIsV0FBZ0MsUUFBaEMsVUFBQSxBQUEyQyxBQUM1Qzs7Ozs7QUFMcUMsQTs7a0JBQW5CLEEiLCJmaWxlIjoiX2RvY3VtZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0L2RldmVsb3BtZW50L21obWUifQ==