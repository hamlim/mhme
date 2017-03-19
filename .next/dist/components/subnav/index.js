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
    css: '.subnav[data-jsx="3481629647"] {max-width: var(--width);margin: 0 auto 160px;margin: 0 auto 10rem;}.subnav[data-jsx="3481629647"] { display:-webkit-box; display:-ms-flexbox; display:flex;-webkit-box-pack: justify;-ms-flex-pack: justify;justify-content: space-between;-webkit-box-align: center;-ms-flex-align: center;align-items: center;height: 48px;height: 3rem;font-size: 24px;font-size: 1.5rem;}.subnav__link[data-jsx="3481629647"] {color: var(--b);text-decoration: none;}.subnav__link.is-active[data-jsx="3481629647"] {color: var(--a);text-decoration: none;}.subnav__link[data-jsx="3481629647"]:hover,.subnav__link[data-jsx="3481629647"]:focus,.subnav__link.is-active[data-jsx="3481629647"]:hover,.subnav__link.is-active[data-jsx="3481629647"]:focus {text-decoration: underline;color: var(--c);}\n/*@ sourceURL=components/subnav/index.js */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0L2RldmVsb3BtZW50L21obWUvY29tcG9uZW50cy9zdWJuYXYvaW5kZXguanMiLCJjb21wb25lbnRzL3N1Ym5hdi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRZ0IsZ0NBRWdCLHdCQUNILHFCQUN0QixBQURzQixxQkFDdEIsQ0FFUSxpQ0FDTyxvQkFDaUIsQ0FEakIsb0JBQ2lCLENBRGpCLGFBQ2lCLDBCQUNYLEFBRFcsdUJBQ1gsQUFEVywrQkFDWCwwQkFDUCxBQURPLHVCQUNQLEFBRE8sb0JBQ1AsYUFDSyxBQURMLGFBQ0ssZ0JBQ25CLEFBRG1CLGtCQUNuQixDQUVjLHNDQUNHLGdCQUNNLHNCQUN2QixDQUN3QixnREFDUCxnQkFDTSxzQkFDdkIsQ0FLOEIsaU1BQ0YsMkJBQ1gsZ0JBQ2pCLENBQUE7QUNuQ1AsMkNBQTJDIiwiZmlsZSI6InRvLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBTdWJuYXYgPSAoe3BhZ2V9KSA9PiAoXG4gIDxuYXYgY2xhc3NOYW1lPVwic3VibmF2XCI+XG4gICAgPExpbmsgaHJlZj1cIi9ibG9nXCIgPjxhIGNsYXNzTmFtZT17cGFnZSA9PT0gJ2Jsb2cnID8gJ3N1Ym5hdl9fbGluayBpcy1hY3RpdmUnIDogJ3N1Ym5hdl9fbGluayd9PkJsb2c8L2E+PC9MaW5rPlxuICAgIDxMaW5rIGhyZWY9XCIvYmxvZy9mZWVkXCI+PGEgY2xhc3NOYW1lPXtwYWdlID09PSAnZmVlZCcgPyAnc3VibmF2X19saW5rIGlzLWFjdGl2ZScgOiAnc3VibmF2X19saW5rJ30+RmVlZDwvYT48L0xpbms+XG4gICAgPExpbmsgaHJlZj1cIi9ibG9nL3RhZ3NcIj48YSBjbGFzc05hbWU9e3BhZ2UgPT09ICd0YWdzJyA/ICdzdWJuYXZfX2xpbmsgaXMtYWN0aXZlJyA6ICdzdWJuYXZfX2xpbmsnfT5UYWdzPC9hPjwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc3VibmF2IHtcbiAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS13aWR0aCk7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDEwcmVtO1xuICAgICAgfVxuXG4gICAgICAuc3VibmF2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuXG4gICAgICAuc3VibmF2X19saW5rIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWIpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICAuc3VibmF2X19saW5rLmlzLWFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hKTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAuc3VibmF2X19saW5rOmhvdmVyLFxuICAgICAgLnN1Ym5hdl9fbGluazpmb2N1cyxcbiAgICAgIC5zdWJuYXZfX2xpbmsuaXMtYWN0aXZlOmhvdmVyLFxuICAgICAgLnN1Ym5hdl9fbGluay5pcy1hY3RpdmU6Zm9jdXMge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgY29sb3I6IHZhcigtLWMpO1xuICAgICAgfVxuXG4gICAgYH08L3N0eWxlPlxuICA8L25hdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN1Ym5hdjsiLCIuc3VibmF2W2RhdGEtanN4PVwiMzQ4MTYyOTY0N1wiXSB7bWF4LXdpZHRoOiB2YXIoLS13aWR0aCk7bWFyZ2luOiAwIGF1dG8gMTByZW07fS5zdWJuYXZbZGF0YS1qc3g9XCIzNDgxNjI5NjQ3XCJdIHtkaXNwbGF5Oi13ZWJraXQtZmxleDsgZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczogY2VudGVyO2hlaWdodDogM3JlbTtmb250LXNpemU6IDEuNXJlbTt9LnN1Ym5hdl9fbGlua1tkYXRhLWpzeD1cIjM0ODE2Mjk2NDdcIl0ge2NvbG9yOiB2YXIoLS1iKTt0ZXh0LWRlY29yYXRpb246IG5vbmU7fS5zdWJuYXZfX2xpbmsuaXMtYWN0aXZlW2RhdGEtanN4PVwiMzQ4MTYyOTY0N1wiXSB7Y29sb3I6IHZhcigtLWEpO3RleHQtZGVjb3JhdGlvbjogbm9uZTt9LnN1Ym5hdl9fbGlua1tkYXRhLWpzeD1cIjM0ODE2Mjk2NDdcIl06aG92ZXIsLnN1Ym5hdl9fbGlua1tkYXRhLWpzeD1cIjM0ODE2Mjk2NDdcIl06Zm9jdXMsLnN1Ym5hdl9fbGluay5pcy1hY3RpdmVbZGF0YS1qc3g9XCIzNDgxNjI5NjQ3XCJdOmhvdmVyLC5zdWJuYXZfX2xpbmsuaXMtYWN0aXZlW2RhdGEtanN4PVwiMzQ4MTYyOTY0N1wiXTpmb2N1cyB7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7Y29sb3I6IHZhcigtLWMpO31cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltTnZiWEJ2Ym1WdWRITXZjM1ZpYm1GMkwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFWRm5RaXhCUVVORUxHZERRVU5wUWl4M1FrRkRTQ3h4UWtGRGRFSXNRMEZGVVN4blEwRkRUeXh0UTBGRGFVSXNLMEpCUTFnc2IwSkJRMUFzWVVGRFN5eHJRa0ZEYmtJc1EwRkZZeXh6UTBGRFJ5eG5Ra0ZEVFN4elFrRkRka0lzUTBGRGQwSXNaMFJCUTFBc1owSkJRMDBzYzBKQlEzWkNMRU5CU3poQ0xHbE5RVU5HTERKQ1FVTllMR2RDUVVOcVFpSXNJbVpwYkdVaU9pSmpiMjF3YjI1bGJuUnpMM04xWW01aGRpOXBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRDOWtaWFpsYkc5d2JXVnVkQzl0YUcxbElpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGSmxZV04wSUdaeWIyMGdKM0psWVdOMEp6dGNibWx0Y0c5eWRDQk1hVzVySUdaeWIyMGdKMjVsZUhRdmJHbHVheWM3WEc1Y2JtTnZibk4wSUZOMVltNWhkaUE5SUNoN2NHRm5aWDBwSUQwK0lDaGNiaUFnUEc1aGRpQmpiR0Z6YzA1aGJXVTlYQ0p6ZFdKdVlYWmNJajVjYmlBZ0lDQThUR2x1YXlCb2NtVm1QVndpTDJKc2IyZGNJaUErUEdFZ1kyeGhjM05PWVcxbFBYdHdZV2RsSUQwOVBTQW5ZbXh2WnljZ1B5QW5jM1ZpYm1GMlgxOXNhVzVySUdsekxXRmpkR2wyWlNjZ09pQW5jM1ZpYm1GMlgxOXNhVzVySjMwK1FteHZaend2WVQ0OEwweHBibXMrWEc0Z0lDQWdQRXhwYm1zZ2FISmxaajFjSWk5aWJHOW5MMlpsWldSY0lqNDhZU0JqYkdGemMwNWhiV1U5ZTNCaFoyVWdQVDA5SUNkbVpXVmtKeUEvSUNkemRXSnVZWFpmWDJ4cGJtc2dhWE10WVdOMGFYWmxKeUE2SUNkemRXSnVZWFpmWDJ4cGJtc25mVDVHWldWa1BDOWhQand2VEdsdWF6NWNiaUFnSUNBOFRHbHVheUJvY21WbVBWd2lMMkpzYjJjdmRHRm5jMXdpUGp4aElHTnNZWE56VG1GdFpUMTdjR0ZuWlNBOVBUMGdKM1JoWjNNbklEOGdKM04xWW01aGRsOWZiR2x1YXlCcGN5MWhZM1JwZG1VbklEb2dKM04xWW01aGRsOWZiR2x1YXlkOVBsUmhaM004TDJFK1BDOU1hVzVyUGx4dUlDQWdJRHh6ZEhsc1pTQnFjM2crZTJCY2JpQWdJQ0FnSUM1emRXSnVZWFlnZTF4dUlDQWdJQ0FnSUNCdFlYZ3RkMmxrZEdnNklIWmhjaWd0TFhkcFpIUm9LVHRjYmlBZ0lDQWdJQ0FnYldGeVoybHVPaUF3SUdGMWRHOGdNVEJ5WlcwN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDNXpkV0p1WVhZZ2UxeHVJQ0FnSUNBZ0lDQmthWE53YkdGNU9pQm1iR1Y0TzF4dUlDQWdJQ0FnSUNCcWRYTjBhV1o1TFdOdmJuUmxiblE2SUhOd1lXTmxMV0psZEhkbFpXNDdYRzRnSUNBZ0lDQWdJR0ZzYVdkdUxXbDBaVzF6T2lCalpXNTBaWEk3WEc0Z0lDQWdJQ0FnSUdobGFXZG9kRG9nTTNKbGJUdGNiaUFnSUNBZ0lDQWdabTl1ZEMxemFYcGxPaUF4TGpWeVpXMDdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQzV6ZFdKdVlYWmZYMnhwYm1zZ2UxeHVJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ2RtRnlLQzB0WWlrN1hHNGdJQ0FnSUNBZ0lIUmxlSFF0WkdWamIzSmhkR2x2YmpvZ2JtOXVaVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJQzV6ZFdKdVlYWmZYMnhwYm1zdWFYTXRZV04wYVhabElIdGNiaUFnSUNBZ0lDQWdZMjlzYjNJNklIWmhjaWd0TFdFcE8xeHVJQ0FnSUNBZ0lDQjBaWGgwTFdSbFkyOXlZWFJwYjI0NklHNXZibVU3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM1emRXSnVZWFpmWDJ4cGJtczZhRzkyWlhJc1hHNGdJQ0FnSUNBdWMzVmlibUYyWDE5c2FXNXJPbVp2WTNWekxGeHVJQ0FnSUNBZ0xuTjFZbTVoZGw5ZmJHbHVheTVwY3kxaFkzUnBkbVU2YUc5MlpYSXNYRzRnSUNBZ0lDQXVjM1ZpYm1GMlgxOXNhVzVyTG1sekxXRmpkR2wyWlRwbWIyTjFjeUI3WEc0Z0lDQWdJQ0FnSUhSbGVIUXRaR1ZqYjNKaGRHbHZiam9nZFc1a1pYSnNhVzVsTzF4dUlDQWdJQ0FnSUNCamIyeHZjam9nZG1GeUtDMHRZeWs3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0JnZlR3dmMzUjViR1UrWEc0Z0lEd3ZibUYyUGx4dUtUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVM1ZpYm1GMk95SmRmUT09ICovXG4vKkAgc291cmNlVVJMPWNvbXBvbmVudHMvc3VibmF2L2luZGV4LmpzICovIl19 */'
  }));
};

exports.default = Subnav;