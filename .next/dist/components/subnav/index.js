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

var Subnav = function Subnav(_ref) {
  var page = _ref.page;
  return _react2.default.createElement('nav', { className: 'subnav', 'data-jsx': 3481629647
  }, _react2.default.createElement(_link2.default, { href: '/blog' }, _react2.default.createElement('a', { className: page === 'blog' ? 'subnav__link is-active' : 'subnav__link', 'data-jsx': 3481629647
  }, 'Blog')), _react2.default.createElement(_link2.default, { href: '/blog/feed' }, _react2.default.createElement('a', { className: page === 'feed' ? 'subnav__link is-active' : 'subnav__link', 'data-jsx': 3481629647
  }, 'Feed')), _react2.default.createElement(_link2.default, { href: '/blog/tags' }, _react2.default.createElement('a', { className: page === 'tags' ? 'subnav__link is-active' : 'subnav__link', 'data-jsx': 3481629647
  }, 'Tags')), _react2.default.createElement(_style2.default, {
    styleId: 3481629647,
    css: '.subnav[data-jsx="3481629647"] {max-width: var(--width);margin: 0 auto 160px;margin: 0 auto 10rem;}.subnav[data-jsx="3481629647"] { display:-webkit-box; display:-ms-flexbox; display:flex;-webkit-box-pack: justify;-ms-flex-pack: justify;justify-content: space-between;-webkit-box-align: center;-ms-flex-align: center;align-items: center;height: 48px;height: 3rem;font-size: 24px;font-size: 1.5rem;}.subnav__link[data-jsx="3481629647"] {color: var(--b);text-decoration: none;}.subnav__link.is-active[data-jsx="3481629647"] {color: var(--a);text-decoration: none;}.subnav__link[data-jsx="3481629647"]:hover,.subnav__link[data-jsx="3481629647"]:focus,.subnav__link.is-active[data-jsx="3481629647"]:hover,.subnav__link.is-active[data-jsx="3481629647"]:focus {text-decoration: underline;color: var(--c);}'
  }));
};

exports.default = Subnav;