'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emotion = require('emotion');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactEmotion = require('react-emotion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matt/development/mhme/components/header/index.js';


var linkClass = /*#__PURE__*/(0, _reactEmotion.css)('margin-left:0.5rem;margin-right:0.5rem;text-decoration:none;color:var(--black,black);font-size:1.25rem;transition:color 0.15s ease-in;');
var activeLinkClass = /*#__PURE__*/(0, _reactEmotion.css)('composes:', linkClass, ';color:var(--green,#19a974);');

var Anchor = function Anchor(_ref) {
  var active = _ref.active,
      children = _ref.children,
      href = _ref.href;
  return _react2.default.createElement('a', { href: href, className: active ? activeLinkClass : linkClass, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, children);
};

var header = /*#__PURE__*/(0, _reactEmotion.css)('background-image:linear-gradient(120deg,#84fab0 0%,#8fd3f4 100%);display:flex;flex-direction:column;justify-content:space-around;align-items:center;@media screen and (min-width:30em){flex-direction:row;}');
var headerLink = /*#__PURE__*/(0, _reactEmotion.css)('font-size:2.25rem;text-decoration:none;color:var(--black,black);');
var dib = /*#__PURE__*/(0, _reactEmotion.css)('display:inline-block;');
var headerList = /*#__PURE__*/(0, _reactEmotion.css)('list-style-type:none;disply:flex;flex-direction:row;justify-content:space-between;align-items:center;');

var Header = function Header(_ref2) {
  var activePage = _ref2.activePage;
  return _react2.default.createElement('header', { className: header, __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement('h1', { className: dib, __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _react2.default.createElement('a', { className: headerLink, __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, 'Matt Hamlin'))), _react2.default.createElement('nav', {
    className: /*#__PURE__*/(0, _emotion.css)('margin-left:0.5rem;'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, _react2.default.createElement('ul', { className: headerList, __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, _react2.default.createElement('li', { className: dib, __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, _react2.default.createElement(_link2.default, { href: '/blog', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, _react2.default.createElement(Anchor, { active: activePage === 'blog', href: '/blog', __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, '\u270D\uFE0F Blog'))), _react2.default.createElement('li', { className: dib, __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, _react2.default.createElement(_link2.default, { href: '/projects', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, _react2.default.createElement(Anchor, { active: activePage === 'projects', href: '/projects', __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, '\u2728 Projects'))), _react2.default.createElement('li', { className: dib, __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, _react2.default.createElement(_link2.default, { href: '/travel', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, _react2.default.createElement(Anchor, { active: activePage === 'travel', href: '/travel', __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, '\u2708\uFE0F Travel'))), _react2.default.createElement('li', { className: dib, __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, _react2.default.createElement(_link2.default, { href: '/resolutions', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, _react2.default.createElement(Anchor, { active: activePage === 'resolutions', href: '/resolutions', __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, '\uD83D\uDCD3\uFE0F 2018 Resolutions'))))));
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsImNzcyIsImxpbmtDbGFzcyIsImFjdGl2ZUxpbmtDbGFzcyIsIkFuY2hvciIsImFjdGl2ZSIsImNoaWxkcmVuIiwiaHJlZiIsImhlYWRlciIsImhlYWRlckxpbmsiLCJkaWIiLCJoZWFkZXJMaXN0IiwiSGVhZGVyIiwiYWN0aXZlUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7Ozs7Ozs7QUFFVCxJQUFNLHlCQUFBLEFBQVksdUJBQWxCO0FBUUEsSUFBTSwrQkFBQSxBQUFrQixvQ0FBbEIsQUFDUSxXQURkOztBQUtBLElBQU0sU0FBUyxTQUFULEFBQVMsYUFBQTtNQUFBLEFBQUcsY0FBSCxBQUFHO01BQUgsQUFBVyxnQkFBWCxBQUFXO01BQVgsQUFBcUIsWUFBckIsQUFBcUI7eUJBQ2xDLGNBQUEsT0FBRyxNQUFILEFBQVMsTUFBTSxXQUFXLFNBQUEsQUFBUyxrQkFBbkMsQUFBcUQ7Z0JBQXJEO2tCQUFBLEFBQ0c7QUFESDtHQUFBLEVBRGEsQUFDYjtBQURGOztBQU1BLElBQU0sc0JBQUEsQUFBUyx1QkFBZjtBQVVBLElBQU0sMEJBQUEsQUFBYSx1QkFBbkI7QUFLQSxJQUFNLG1CQUFBLEFBQU0sdUJBQVo7QUFHQSxJQUFNLDBCQUFBLEFBQWEsdUJBQW5COztBQVFBLElBQU0sU0FBUyxTQUFULEFBQVMsY0FBQTtNQUFBLEFBQUcsbUJBQUgsQUFBRzt5QkFDaEIsY0FBQSxZQUFRLFdBQVIsQUFBbUI7Z0JBQW5CO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXO2dCQUFYO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFjO2dCQUFkO2tCQUFBO0FBQUE7S0FITixBQUNFLEFBQ0UsQUFDRSxBQUdKLGtDQUFBLGNBQUE7OENBQUE7O2dCQUFBO2tCQUFBLEFBS0U7QUFMRjtBQUFBLHFCQUtFLGNBQUEsUUFBSSxXQUFKLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXLFNBQVEsVUFBbkI7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO3FCQUNHLGNBQUQsVUFBUSxRQUFRLGVBQWhCLEFBQStCLFFBQVEsTUFBdkMsQUFBNEM7Z0JBQTVDO2tCQUFBO0FBQUE7S0FITixBQUNFLEFBQ0UsQUFDRSxBQUtKLHdDQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXLGFBQVksVUFBdkI7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO3FCQUNHLGNBQUQsVUFBUSxRQUFRLGVBQWhCLEFBQStCLFlBQVksTUFBM0MsQUFBZ0Q7Z0JBQWhEO2tCQUFBO0FBQUE7S0FWTixBQVFFLEFBQ0UsQUFDRSxBQUtKLHNDQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXLFdBQVUsVUFBckI7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO3FCQUNHLGNBQUQsVUFBUSxRQUFRLGVBQWhCLEFBQStCLFVBQVUsTUFBekMsQUFBOEM7Z0JBQTlDO2tCQUFBO0FBQUE7S0FqQk4sQUFlRSxBQUNFLEFBQ0UsQUFLSiwwQ0FBQSxjQUFBLFFBQUksV0FBSixBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBVyxnQkFBZSxVQUExQjtnQkFBQTtrQkFBQSxBQUNFO0FBREY7cUJBQ0csY0FBRCxVQUFRLFFBQVEsZUFBaEIsQUFBK0IsZUFBZSxNQUE5QyxBQUFtRDtnQkFBbkQ7a0JBQUE7QUFBQTtLQXBDRyxBQUNiLEFBTUUsQUFLRSxBQXNCRSxBQUNFLEFBQ0U7QUFwQ1osQUE4Q0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHQvZGV2ZWxvcG1lbnQvbWhtZSJ9