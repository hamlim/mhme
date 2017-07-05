'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matt/development/mhme/components/header/index.js';


var activeLinkClass = 'mh2 no-underline f4 link green';
var linkClass = 'mh2 no-underline black f4 link';

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
	return _react2.default.createElement('header', { className: 'flex flex-row-ns flex-column justify-around items-center', __source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, _react2.default.createElement('h1', { className: 'dib', __source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, _react2.default.createElement(_link2.default, { href: '/', __source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, _react2.default.createElement('a', { className: 'f2 no-underline black', __source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, 'Matt Hamlin'))), _react2.default.createElement('nav', { className: 'ml2', __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement('ul', { className: 'header__list list flex-row justify-between items-center', __source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, _react2.default.createElement('li', { className: 'dib', __source: {
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
	}, '\u270D\uFE0F Blog'))), _react2.default.createElement('li', { className: 'dib', __source: {
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
	}, '\u2728 Projects'))), _react2.default.createElement('li', { className: 'dib', __source: {
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
	}, '\u2708\uFE0F Travel'))))));
};

exports.default = Header;