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

var _jsxFileName = '/Users/matt/development/mhme/components/subnav/index.js';


var Subnav = function Subnav(_ref) {
  var page = _ref.page;
  return _react2.default.createElement('nav', { className: 'subnav', 'data-jsx': 3481629647,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_link2.default, { href: '/blog', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('a', { className: page === 'blog' ? 'subnav__link is-active' : 'subnav__link', 'data-jsx': 3481629647,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'Blog')), _react2.default.createElement(_link2.default, { href: '/blog/feed', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('a', { className: page === 'feed' ? 'subnav__link is-active' : 'subnav__link', 'data-jsx': 3481629647,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'Feed')), _react2.default.createElement(_link2.default, { href: '/blog/tags', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('a', { className: page === 'tags' ? 'subnav__link is-active' : 'subnav__link', 'data-jsx': 3481629647,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'Tags')), _react2.default.createElement(_style2.default, {
    styleId: 3481629647,
    css: '.subnav[data-jsx="3481629647"] {max-width: var(--width);margin: 0 auto 10rem;}.subnav[data-jsx="3481629647"] {display:-webkit-flex; display:flex;justify-content: space-between;align-items: center;height: 3rem;font-size: 1.5rem;}.subnav__link[data-jsx="3481629647"] {color: var(--b);text-decoration: none;}.subnav__link.is-active[data-jsx="3481629647"] {color: var(--a);text-decoration: none;}.subnav__link[data-jsx="3481629647"]:hover,.subnav__link[data-jsx="3481629647"]:focus,.subnav__link.is-active[data-jsx="3481629647"]:hover,.subnav__link.is-active[data-jsx="3481629647"]:focus {text-decoration: underline;color: var(--c);}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3VibmF2L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFnQixBQUNELGdDQUNpQix3QkFDSCxxQkFDdEIsQ0FFUSxnQ0FDTyxtQ0FDaUIsK0JBQ1gsb0JBQ1AsYUFDSyxrQkFDbkIsQ0FFYyxzQ0FDRyxnQkFDTSxzQkFDdkIsQ0FDd0IsZ0RBQ1AsZ0JBQ00sc0JBQ3ZCLENBSzhCLGlNQUNGLDJCQUNYLGdCQUNqQiIsImZpbGUiOiJjb21wb25lbnRzL3N1Ym5hdi9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dC9kZXZlbG9wbWVudC9taG1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IFN1Ym5hdiA9ICh7cGFnZX0pID0+IChcbiAgPG5hdiBjbGFzc05hbWU9XCJzdWJuYXZcIj5cbiAgICA8TGluayBocmVmPVwiL2Jsb2dcIiA+PGEgY2xhc3NOYW1lPXtwYWdlID09PSAnYmxvZycgPyAnc3VibmF2X19saW5rIGlzLWFjdGl2ZScgOiAnc3VibmF2X19saW5rJ30+QmxvZzwvYT48L0xpbms+XG4gICAgPExpbmsgaHJlZj1cIi9ibG9nL2ZlZWRcIj48YSBjbGFzc05hbWU9e3BhZ2UgPT09ICdmZWVkJyA/ICdzdWJuYXZfX2xpbmsgaXMtYWN0aXZlJyA6ICdzdWJuYXZfX2xpbmsnfT5GZWVkPC9hPjwvTGluaz5cbiAgICA8TGluayBocmVmPVwiL2Jsb2cvdGFnc1wiPjxhIGNsYXNzTmFtZT17cGFnZSA9PT0gJ3RhZ3MnID8gJ3N1Ym5hdl9fbGluayBpcy1hY3RpdmUnIDogJ3N1Ym5hdl9fbGluayd9PlRhZ3M8L2E+PC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zdWJuYXYge1xuICAgICAgICBtYXgtd2lkdGg6IHZhcigtLXdpZHRoKTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMTByZW07XG4gICAgICB9XG5cbiAgICAgIC5zdWJuYXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5zdWJuYXZfX2xpbmsge1xuICAgICAgICBjb2xvcjogdmFyKC0tYik7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5zdWJuYXZfX2xpbmsuaXMtYWN0aXZlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWEpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5zdWJuYXZfX2xpbms6aG92ZXIsXG4gICAgICAuc3VibmF2X19saW5rOmZvY3VzLFxuICAgICAgLnN1Ym5hdl9fbGluay5pcy1hY3RpdmU6aG92ZXIsXG4gICAgICAuc3VibmF2X19saW5rLmlzLWFjdGl2ZTpmb2N1cyB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjb2xvcjogdmFyKC0tYyk7XG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG4gIDwvbmF2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3VibmF2OyJdfQ== */\n/*@ sourceURL=components/subnav/index.js */'
  }));
};

exports.default = Subnav;