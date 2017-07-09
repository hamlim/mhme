'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _emotion = require('emotion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matt/development/mhme/components/header/index.js';


var linkClass = (0, _emotion.css)(['css-linkClass-12q7u5g'], [], function createEmotionRules() {
  return ['.css-linkClass-12q7u5g { margin-left: .5rem;\n\tmargin-right: .5rem;\n\ttext-decoration: none;\n\tcolor: var(--black, black);\n\tfont-size: 1.25rem;\n\t-webkit-transition: color .15s ease-in;\n\ttransition: color .15s ease-in; }'];
});
var activeLinkClass = (0, _emotion.css)(['css-activeLinkClass-11ecy0r', linkClass], [], function createEmotionRules() {
  return ['.css-activeLinkClass-11ecy0r {\n\tcolor: var(--green, #19a974); }'];
});

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

var header = (0, _emotion.css)(['css-header-97tsor'], [], function createEmotionRules() {
  return ['.css-header-97tsor { background-image: -webkit-linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%); background-image: -moz-linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%); background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);\n\tdisplay: -webkit-box;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\t-webkit-flex-direction: column;\n\t-ms-flex-direction: column;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\tflex-direction: column;\n\t-webkit-justify-content: space-around;\n\t-ms-flex-pack: distribute;\n\t-webkit-box-pack: justify;\n\tjustify-content: space-around;\n\t-webkit-align-items: center;\n\t-ms-flex-align: center;\n\t-webkit-box-align: center;\n\talign-items: center; }', '@media screen and (min-width: 30em) {\n .css-header-97tsor { -webkit-flex-direction: row; -ms-flex-direction: row; -webkit-box-orient: horizontal; -webkit-box-direction: normal; flex-direction: row; } }'];
});
var headerLink = (0, _emotion.css)(['css-headerLink-19ebgu1'], [], function createEmotionRules() {
  return ['.css-headerLink-19ebgu1 { font-size: 2.25rem;\n\ttext-decoration: none;\n\tcolor: var(--black, black); }'];
});
var dib = (0, _emotion.css)(['css-dib-tpaepq'], [], function createEmotionRules() {
  return ['.css-dib-tpaepq { display: inline-block; }'];
});
var headerList = (0, _emotion.css)(['css-headerList-poaqwq'], [], function createEmotionRules() {
  return ['.css-headerList-poaqwq { list-style-type: none;\n\tdisply: flex;\n\t-webkit-flex-direction: row;\n\t-ms-flex-direction: row;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\tflex-direction: row;\n\t-webkit-justify-content: space-between;\n\t-ms-flex-pack: justify;\n\t-webkit-box-pack: justify;\n\tjustify-content: space-between;\n\t-webkit-align-items: center;\n\t-ms-flex-align: center;\n\t-webkit-box-align: center;\n\talign-items: center; }'];
});

var Header = function Header(_ref2) {
  var activePage = _ref2.activePage;
  return _react2.default.createElement('header', { className: header, __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, _react2.default.createElement('h1', { className: dib, __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, _react2.default.createElement('a', { className: headerLink, __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, 'Matt Hamlin'))), _react2.default.createElement('nav', {
    className: (0, _emotion.css)(['css-Header-bsfl8r'], [], function createEmotionRules() {
      return ['.css-Header-bsfl8r { margin-left: .5rem; }'];
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, _react2.default.createElement('ul', { className: headerList, __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, _react2.default.createElement('li', { className: dib, __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, _react2.default.createElement(_link2.default, { href: '/blog', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, _react2.default.createElement(Anchor, { active: activePage === 'blog', href: '/blog', __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, '\u270D\uFE0F Blog'))), _react2.default.createElement('li', { className: dib, __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, _react2.default.createElement(_link2.default, { href: '/projects', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, _react2.default.createElement(Anchor, { active: activePage === 'projects', href: '/projects', __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, '\u2728 Projects'))), _react2.default.createElement('li', { className: dib, __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, _react2.default.createElement(_link2.default, { href: '/travel', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, _react2.default.createElement(Anchor, { active: activePage === 'travel', href: '/travel', __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, '\u2708\uFE0F Travel'))))));
};

exports.default = Header;