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

var Header = function Header(_ref) {
  var activePage = _ref.activePage;
  return _react2.default.createElement('header', { className: 'header', 'data-jsx': 1185664166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement('h1', {
    'data-jsx': 1185664166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('a', { className: 'name', 'data-jsx': 1185664166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, 'Matt Hamlin'))), _react2.default.createElement('nav', { className: 'header__nav', 'data-jsx': 1185664166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('ul', { className: 'header__list', 'data-jsx': 1185664166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('li', {
    'data-jsx': 1185664166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_link2.default, { href: '/blog', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('a', { className: activePage === "blog" ? "header__link is-active" : "header__link", 'data-jsx': 1185664166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'Blog'))), _react2.default.createElement('li', {
    'data-jsx': 1185664166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_link2.default, { href: '/projects', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('a', { className: activePage === "projects" ? "header__link is-active" : "header__link", 'data-jsx': 1185664166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Projects'))), _react2.default.createElement('li', {
    'data-jsx': 1185664166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_link2.default, { href: '/travel', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('a', { className: activePage === "travel" ? "header__link is-active" : "header__link", 'data-jsx': 1185664166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'Travel'))))), _react2.default.createElement(_style2.default, {
    styleId: 1185664166,
    css: '.header[data-jsx="1185664166"] {display:-webkit-flex; display:flex;justify-content: space-between;align-items: center;height: 10rem;display: grid;grid-template-columns: 1fr;max-width: var(--width);margin: auto;}.name[data-jsx="1185664166"] {font-size: 3rem;text-decoration: none;color: var(--black);}.header__link[data-jsx="1185664166"] {text-decoration: none;color: black;font-size: 1.8rem;}.header__link.is-active[data-jsx="1185664166"] {color: var(--c);}.header__link.is-active[data-jsx="1185664166"]:hover,.header__link.is-active[data-jsx="1185664166"]:focus {text-decoration: underline;color: var(--a);}.header__link[data-jsx="1185664166"]:hover,.header__link[data-jsx="1185664166"]:focus,.name[data-jsx="1185664166"]:hover,.name[data-jsx="1185664166"]:focus {text-decoration: underline;color: var(--a);}.header__list[data-jsx="1185664166"] {list-style: none;display:-webkit-flex; display:flex;justify-content: space-around;align-items: center;}.header__list[data-jsx="1185664166"] > li[data-jsx="1185664166"] {display: inline-block;}@media screen and (min-width: 27rem) {.header__link[data-jsx="1185664166"] {padding: 0 .5em;}}@media screen and (min-width: 45rem) {.header[data-jsx="1185664166"] {grid-template-columns: 1fr 1fr;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFnQixBQUNELGdDQUNPLG1DQUNpQiwrQkFDWCxvQkFDTixjQUVBLGNBQ2EsMkJBRUgsd0JBQ1gsYUFDZCxDQUNNLDhCQUNXLGdCQUNNLHNCQUNGLG9CQUNyQixDQUVjLHNDQUNTLHNCQUNULGFBQ0ssa0JBQ25CLENBQ3dCLGdEQUNQLGdCQUNqQixDQUU4QiwyR0FDRiwyQkFDWCxnQkFDakIsQ0FLWSw2SkFDZ0IsMkJBQ1gsZ0JBQ2pCLENBRWMsc0NBQ0ksaUJBQ0gsbUNBQ2dCLDhCQUNWLG9CQUNyQixDQUNtQixrRUFDSSxzQkFDdkIsQ0FFcUMsc0NBQ3JCLHNDQUNHLGdCQUNqQixDQUNGLENBRXFDLHNDQUMzQixnQ0FDd0IsK0JBQ2hDLENBQ0YiLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkZXIvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHQvZGV2ZWxvcG1lbnQvbWhtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuY29uc3QgSGVhZGVyID0gKHthY3RpdmVQYWdlfSkgPT4gKFxuICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgIDxoMT48TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT1cIm5hbWVcIj5NYXR0IEhhbWxpbjwvYT48L0xpbms+PC9oMT5cbiAgICA8bmF2IGNsYXNzTmFtZT1cImhlYWRlcl9fbmF2XCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiaGVhZGVyX19saXN0XCI+XG4gICAgICAgIDxsaT48TGluayBocmVmPVwiL2Jsb2dcIiBwcmVmZXRjaD48YSBjbGFzc05hbWU9e2FjdGl2ZVBhZ2UgPT09IFwiYmxvZ1wiID8gXCJoZWFkZXJfX2xpbmsgaXMtYWN0aXZlXCIgOiBcImhlYWRlcl9fbGlua1wifT5CbG9nPC9hPjwvTGluaz48L2xpPlxuICAgICAgICB7Lyo8bGk+PExpbmsgaHJlZj1cIi9zdG9yaWVzXCIgcHJlZmV0Y2g+PGEgY2xhc3NOYW1lPXthY3RpdmVQYWdlID09PSBcInN0b3JpZXNcIiA/IFwiaGVhZGVyX19saW5rIGlzLWFjdGl2ZVwiIDogXCJoZWFkZXJfX2xpbmtcIn0+U3RvcmllczwvYT48L0xpbms+PC9saT4qL31cbiAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIiBwcmVmZXRjaD48YSBjbGFzc05hbWU9e2FjdGl2ZVBhZ2UgPT09IFwicHJvamVjdHNcIiA/IFwiaGVhZGVyX19saW5rIGlzLWFjdGl2ZVwiIDogXCJoZWFkZXJfX2xpbmtcIn0+UHJvamVjdHM8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgIDxsaT48TGluayBocmVmPVwiL3RyYXZlbFwiIHByZWZldGNoPjxhIGNsYXNzTmFtZT17YWN0aXZlUGFnZSA9PT0gXCJ0cmF2ZWxcIiA/IFwiaGVhZGVyX19saW5rIGlzLWFjdGl2ZVwiIDogXCJoZWFkZXJfX2xpbmtcIn0+VHJhdmVsPC9hPjwvTGluaz48L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDEwcmVtO1xuXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXG4gICAgICAgIG1heC13aWR0aDogdmFyKC0td2lkdGgpO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG4gICAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyX19saW5rIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgfVxuICAgICAgLmhlYWRlcl9fbGluay5pcy1hY3RpdmUge1xuICAgICAgICBjb2xvcjogdmFyKC0tYyk7XG4gICAgICB9XG4gICAgICAuaGVhZGVyX19saW5rLmlzLWFjdGl2ZTpob3ZlcixcbiAgICAgIC5oZWFkZXJfX2xpbmsuaXMtYWN0aXZlOmZvY3VzIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hKTtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlcl9fbGluazpob3ZlcixcbiAgICAgIC5oZWFkZXJfX2xpbms6Zm9jdXMsXG4gICAgICAubmFtZTpob3ZlcixcbiAgICAgIC5uYW1lOmZvY3VzIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hKTtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlcl9fbGlzdCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmhlYWRlcl9fbGlzdCA+IGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyN3JlbSkge1xuICAgICAgICAuaGVhZGVyX19saW5rIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIC41ZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDVyZW0pIHtcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2hlYWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=components/header/index.js */'
  }));
};

exports.default = Header;