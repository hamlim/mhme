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

var Header = function Header(_ref) {
  var activePage = _ref.activePage;
  return _react2.default.createElement('header', { className: 'header', 'data-jsx': 1185664166
  }, _react2.default.createElement('h1', {
    'data-jsx': 1185664166
  }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', { className: 'name', 'data-jsx': 1185664166
  }, 'Matt Hamlin'))), _react2.default.createElement('nav', { className: 'header__nav', 'data-jsx': 1185664166
  }, _react2.default.createElement('ul', { className: 'header__list', 'data-jsx': 1185664166
  }, _react2.default.createElement('li', {
    'data-jsx': 1185664166
  }, _react2.default.createElement(_link2.default, { href: '/blog', prefetch: true }, _react2.default.createElement('a', { className: activePage === "blog" ? "header__link is-active" : "header__link", 'data-jsx': 1185664166
  }, 'Blog'))), _react2.default.createElement('li', {
    'data-jsx': 1185664166
  }, _react2.default.createElement(_link2.default, { href: '/projects', prefetch: true }, _react2.default.createElement('a', { className: activePage === "projects" ? "header__link is-active" : "header__link", 'data-jsx': 1185664166
  }, 'Projects'))), _react2.default.createElement('li', {
    'data-jsx': 1185664166
  }, _react2.default.createElement(_link2.default, { href: '/travel', prefetch: true }, _react2.default.createElement('a', { className: activePage === "travel" ? "header__link is-active" : "header__link", 'data-jsx': 1185664166
  }, 'Travel'))))), _react2.default.createElement(_style2.default, {
    styleId: 1185664166,
    css: '.header[data-jsx="1185664166"] { display:-webkit-box; display:-ms-flexbox; display:flex;-webkit-box-pack: justify;-ms-flex-pack: justify;justify-content: space-between;-webkit-box-align: center;-ms-flex-align: center;align-items: center;height:160px;height: 10rem;display: -ms-grid;display: grid;-ms-grid-columns: 1fr;grid-template-columns: 1fr;max-width:var(--width);margin: auto;}.name[data-jsx="1185664166"] {font-size:48px;font-size: 3rem;text-decoration: none;color:var(--black);}.header__link[data-jsx="1185664166"] {text-decoration: none;color: black;font-size:28.8px;font-size: 1.8rem;}.header__link.is-active[data-jsx="1185664166"] {color:var(--c);}.header__link.is-active[data-jsx="1185664166"]:hover,.header__link.is-active[data-jsx="1185664166"]:focus {text-decoration: underline;color:var(--a);}.header__link[data-jsx="1185664166"]:hover,.header__link[data-jsx="1185664166"]:focus,.name[data-jsx="1185664166"]:hover,.name[data-jsx="1185664166"]:focus {text-decoration: underline;color:var(--a);}.header__list[data-jsx="1185664166"] {list-style: none; display:-webkit-box; display:-ms-flexbox; display:flex;-ms-flex-pack: distribute;justify-content: space-around;-webkit-box-align: center;-ms-flex-align: center;align-items: center;}.header__list[data-jsx="1185664166"] > li[data-jsx="1185664166"] {display: inline-block;}@media screen and (min-width: 27rem) {.header__link[data-jsx="1185664166"] {padding: 0 .5em;}}@media screen and (min-width: 45rem) {.header[data-jsx="1185664166"] {-ms-grid-columns: 1fr 1fr;grid-template-columns: 1fr 1fr;}}'
  }));
};

exports.default = Header;