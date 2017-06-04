'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matt/development/mhme/components/header/index.js';


var activeLinkClass = 'header__link no-underline black f4 green';
var linkClass = 'header__link no-underline black f4';

var Anchor = function Anchor(_ref) {
	var active = _ref.active,
	    children = _ref.children,
	    href = _ref.href;
	return _react2.default.createElement('a', { href: href, className: active ? activeLinkClass : linkClass, __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, children);
};

var Header = function Header(_ref2) {
	var activePage = _ref2.activePage;
	return _react2.default.createElement('header', { className: 'header flex-row justify-around items-center', 'data-jsx': 1010528820,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, _react2.default.createElement('h1', {
		'data-jsx': 1010528820,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, _react2.default.createElement(_link2.default, { href: '/', __source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, _react2.default.createElement('a', { className: 'f2 no-underline black', 'data-jsx': 1010528820,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, 'Matt Hamlin'))), _react2.default.createElement('nav', { className: 'header__nav', 'data-jsx': 1010528820,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement('ul', { className: 'header__list list flex-row justify-between items-center', 'data-jsx': 1010528820,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, _react2.default.createElement('li', {
		'data-jsx': 1010528820,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, _react2.default.createElement(_link2.default, { href: '/blog', prefetch: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, _react2.default.createElement(Anchor, { active: activePage === 'blog', href: '/blog', __source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}, 'Blog'))), _react2.default.createElement('li', {
		'data-jsx': 1010528820,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, _react2.default.createElement(_link2.default, { href: '/projects', prefetch: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}, _react2.default.createElement(Anchor, { active: activePage === 'projects', href: '/projects', __source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}, 'Projects'))), _react2.default.createElement('li', {
		'data-jsx': 1010528820,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}, _react2.default.createElement(_link2.default, { href: '/travel', prefetch: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 30
		}
	}, _react2.default.createElement(Anchor, { active: activePage === 'travel', href: '/travel', __source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}, 'Travel'))))), _react2.default.createElement(_style2.default, {
		styleId: 1010528820,
		css: '\n      .header {\n        height: 160px;\n        height: 10rem;\n\n        display: -ms-grid;\n\n        display: grid;\n        -ms-grid-columns: 1fr;\n            grid-template-columns: 1fr;\n\n        max-width: var(--width);\n        margin: auto;\n      }\n\n      .header__link:hover,\n      .header__link:focus,\n      .name:hover,\n      .name:focus {\n        text-decoration: underline;\n        color: var(--a);\n      }\n\n      .header__list > li {\n        display: inline-block;\n      }\n\n      @media screen and (min-width: 27rem) {\n        .header__link {\n          padding: 0 .5em;\n        }\n      }\n\n      @media screen and (min-width: 45rem) {\n        .header {\n          -ms-grid-columns: 1fr 1fr;\n              grid-template-columns: 1fr 1fr;\n        }\n      }\n    '
	}));
};

exports.default = Header;