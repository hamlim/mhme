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

var _jsxFileName = '/Users/matt/development/mhme/utils/feedapp.js';

exports.default = function (_ref) {
  var feed = _ref.feed;
  return _react2.default.createElement('section', { className: 'wrap', 'data-jsx': 1619734334,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('ul', { className: 'list', 'data-jsx': 1619734334,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, feed.map(function (post, index) {
    return _react2.default.createElement('li', { key: index, 'data-jsx': 1619734334,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, _react2.default.createElement(_link2.default, { href: post.route ? post.route : { pathname: '/blog/post', query: { slug: '' + post.slug } }, __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }, _react2.default.createElement('a', { className: 'link', 'data-jsx': 1619734334,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, _react2.default.createElement('div', { className: 'postcard', 'data-jsx': 1619734334,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, _react2.default.createElement('h4', { className: 'posttitle', 'data-jsx': 1619734334,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, post.title), _react2.default.createElement('p', { className: 'postlede', 'data-jsx': 1619734334,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, post.lede && post.lede.substring(0, 65) + '...'), _react2.default.createElement('p', { className: 'posttime', 'data-jsx': 1619734334,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, 'Publication Date: ', post.day + ' of ' + post.month + ', ' + post.year)))));
  })), _react2.default.createElement(_style2.default, {
    styleId: 1619734334,
    css: '.link[data-jsx="1619734334"] {color: #F08080;text-decoration: none;}.link[data-jsx="1619734334"]:hover > .postcard[data-jsx="1619734334"],.link[data-jsx="1619734334"]:focus > .postcard[data-jsx="1619734334"] {box-shadow: 0 0 1em 0 #4169E1;}.list[data-jsx="1619734334"] {list-style: none;display: -ms-grid;display: grid;-ms-grid-columns: 1fr 1fr 1fr;grid-template-columns: 1fr 1fr 1fr;grid-gap: 1em;margin: 32px 0;margin: 2rem 0;}.postcard[data-jsx="1619734334"] {margin: 0 auto;max-width: 400px;max-width: 25rem;padding: 1em;border-radius: 5px;height: 100%;}.posttitle[data-jsx="1619734334"] {font-weight: bold;font-size: 32px;font-size: 2rem;margin-bottom: 1em;}.posttime[data-jsx="1619734334"] {color: var(--b-muted);}.postlede[data-jsx="1619734334"] {font-size: 20px;font-size: 1.25rem;margin: .5em 0;}@media screen and (min-width: 45rem) {.postcard[data-jsx="1619734334"] {will-change: box-shadow;box-shadow: 0 0 1em 0 #eee;}}\n/*@ sourceURL=utils/feedapp.js */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0L2RldmVsb3BtZW50L21obWUvdXRpbHMvZmVlZGFwcC5qcyIsInV0aWxzL2ZlZWRhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JnQiw4QkFFaUIsZUFDSCxzQkFDdkIsQ0FHd0IsNklBQ2lCLDhCQUN6QyxDQUVNLDhCQUNZLGlCQUNILGtCQUNxQixBQURyQixjQUNxQiw4QkFDckIsQUFEcUIsbUNBQ3JCLGNBQ0MsZUFDaEIsQUFEZ0IsZUFDaEIsQ0FFVSxrQ0FDTSxlQUNFLGlCQUNKLEFBREksaUJBQ0osYUFDTSxtQkFDTixhQUNkLENBRVcsbUNBQ1Esa0JBQ0YsZ0JBQ0csQUFESCxnQkFDRyxtQkFDcEIsQ0FDVSxrQ0FDYSxzQkFDdkIsQ0FDVSxrQ0FDVSxnQkFDSixBQURJLG1CQUNKLGVBQ2hCLENBQ3FDLHNDQUN6QixrQ0FDZSx3QkFDRywyQkFDNUIsQ0FDRixDQUFBO0FDaEVQLGlDQUFpQyIsImZpbGUiOiJ0by5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgKHtmZWVkfSkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3cmFwXCI+XG4gICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgIHtmZWVkLm1hcCgocG9zdCwgaW5kZXgpID0+IChcbiAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e1xuICAgICAgICAgICAgcG9zdC5yb3V0ZSA/IHBvc3Qucm91dGUgOlxuICAgICAgICAgICAgeyBwYXRobmFtZTogJy9ibG9nL3Bvc3QnLCBxdWVyeTogeyBzbHVnOiBgJHtwb3N0LnNsdWd9YCB9fX0+PGEgY2xhc3NOYW1lPVwibGlua1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0Y2FyZFwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicG9zdHRpdGxlXCI+e3Bvc3QudGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdGxlZGVcIj5cbiAgICAgICAgICAgICAgICB7cG9zdC5sZWRlICYmIHBvc3QubGVkZS5zdWJzdHJpbmcoMCwgNjUpICsgJy4uLid9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdHRpbWVcIj5QdWJsaWNhdGlvbiBEYXRlOiB7YCR7cG9zdC5kYXl9IG9mICR7cG9zdC5tb250aH0sICR7cG9zdC55ZWFyfWB9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPjwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpbmsge1xuICAgICAgICBjb2xvcjogdmFyKC0tYSwgI0YwODA4MCk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmxpbms6aG92ZXIgPiAucG9zdGNhcmQsXG4gICAgICAubGluazpmb2N1cyA+IC5wb3N0Y2FyZCB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gMCB2YXIoLS1iLCAjNDE2OUUxKTtcbiAgICAgIH1cblxuICAgICAgLmxpc3Qge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgICAgICBncmlkLWdhcDogMWVtO1xuICAgICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICAgIH1cblxuICAgICAgLnBvc3RjYXJkIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogMjVyZW07XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5wb3N0dGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICB9XG4gICAgICAucG9zdHRpbWUge1xuICAgICAgICBjb2xvcjogdmFyKC0tYi1tdXRlZCk7XG4gICAgICB9XG4gICAgICAucG9zdGxlZGUge1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgIG1hcmdpbjogLjVlbSAwO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDVyZW0pIHtcbiAgICAgICAgLnBvc3RjYXJkIHtcbiAgICAgICAgICB3aWxsLWNoYW5nZTogYm94LXNoYWRvdztcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMWVtIDAgI2VlZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuIiwiLmxpbmtbZGF0YS1qc3g9XCIxNjE5NzM0MzM0XCJdIHtjb2xvcjogdmFyKC0tYSwgI0YwODA4MCk7dGV4dC1kZWNvcmF0aW9uOiBub25lO30ubGlua1tkYXRhLWpzeD1cIjE2MTk3MzQzMzRcIl06aG92ZXIgPiAucG9zdGNhcmRbZGF0YS1qc3g9XCIxNjE5NzM0MzM0XCJdLC5saW5rW2RhdGEtanN4PVwiMTYxOTczNDMzNFwiXTpmb2N1cyA+IC5wb3N0Y2FyZFtkYXRhLWpzeD1cIjE2MTk3MzQzMzRcIl0ge2JveC1zaGFkb3c6IDAgMCAxZW0gMCB2YXIoLS1iLCAjNDE2OUUxKTt9Lmxpc3RbZGF0YS1qc3g9XCIxNjE5NzM0MzM0XCJdIHtsaXN0LXN0eWxlOiBub25lO2Rpc3BsYXk6IGdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtncmlkLWdhcDogMWVtO21hcmdpbjogMnJlbSAwO30ucG9zdGNhcmRbZGF0YS1qc3g9XCIxNjE5NzM0MzM0XCJdIHttYXJnaW46IDAgYXV0bzttYXgtd2lkdGg6IDI1cmVtO3BhZGRpbmc6IDFlbTtib3JkZXItcmFkaXVzOiA1cHg7aGVpZ2h0OiAxMDAlO30ucG9zdHRpdGxlW2RhdGEtanN4PVwiMTYxOTczNDMzNFwiXSB7Zm9udC13ZWlnaHQ6IGJvbGQ7Zm9udC1zaXplOiAycmVtO21hcmdpbi1ib3R0b206IDFlbTt9LnBvc3R0aW1lW2RhdGEtanN4PVwiMTYxOTczNDMzNFwiXSB7Y29sb3I6IHZhcigtLWItbXV0ZWQpO30ucG9zdGxlZGVbZGF0YS1qc3g9XCIxNjE5NzM0MzM0XCJdIHtmb250LXNpemU6IDEuMjVyZW07bWFyZ2luOiAuNWVtIDA7fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1cmVtKSB7LnBvc3RjYXJkW2RhdGEtanN4PVwiMTYxOTczNDMzNFwiXSB7d2lsbC1jaGFuZ2U6IGJveC1zaGFkb3c7Ym94LXNoYWRvdzogMCAwIDFlbSAwICNlZWU7fX1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluVjBhV3h6TDJabFpXUmhjSEF1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQmMwSm5RaXhCUVVOSUxEaENRVU52UWl4NVFrRkRTQ3h6UWtGRGRrSXNRMEZIZDBJc05rbEJRMmxDTEhkRFFVTjZReXhEUVVWTkxEaENRVU5aTEdsQ1FVTklMR05CUTNGQ0xHMURRVU55UWl4alFVTkRMR1ZCUTJoQ0xFTkJSVlVzYTBOQlEwMHNaVUZEUlN4cFFrRkRTaXhoUVVOTkxHMUNRVU5PTEdGQlEyUXNRMEZGVnl4dFEwRkRVU3hyUWtGRFJpeG5Ra0ZEUnl4dFFrRkRjRUlzUTBGRFZTeHJRMEZEWVN4elFrRkRka0lzUTBGRFZTeHJRMEZEVlN4dFFrRkRTaXhsUVVOb1FpeERRVU54UXl4elEwRkRla0lzYTBOQlEyVXNkMEpCUTBjc01rSkJRelZDTEVOQlEwWWlMQ0ptYVd4bElqb2lkWFJwYkhNdlptVmxaR0Z3Y0M1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRDOWtaWFpsYkc5d2JXVnVkQzl0YUcxbElpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGSmxZV04wSUdaeWIyMGdKM0psWVdOMEp6dGNibWx0Y0c5eWRDQk1hVzVySUdaeWIyMGdKMjVsZUhRdmJHbHVheWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoN1ptVmxaSDBwSUQwK0lDaGNiaUFnUEhObFkzUnBiMjRnWTJ4aGMzTk9ZVzFsUFZ3aWQzSmhjRndpUGx4dUlDQWdJRHgxYkNCamJHRnpjMDVoYldVOVhDSnNhWE4wWENJK1hHNGdJQ0FnSUNCN1ptVmxaQzV0WVhBb0tIQnZjM1FzSUdsdVpHVjRLU0E5UGlBb1hHNGdJQ0FnSUNBZ0lEeHNhU0JyWlhrOWUybHVaR1Y0ZlQ1Y2JpQWdJQ0FnSUNBZ0lDQThUR2x1YXlCb2NtVm1QWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnZjM1F1Y205MWRHVWdQeUJ3YjNOMExuSnZkWFJsSURwY2JpQWdJQ0FnSUNBZ0lDQWdJSHNnY0dGMGFHNWhiV1U2SUNjdllteHZaeTl3YjNOMEp5d2djWFZsY25rNklIc2djMngxWnpvZ1lDUjdjRzl6ZEM1emJIVm5mV0FnZlgxOVBqeGhJR05zWVhOelRtRnRaVDFjSW14cGJtdGNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFZ3aWNHOXpkR05oY21SY0lqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BHZzBJR05zWVhOelRtRnRaVDFjSW5CdmMzUjBhWFJzWlZ3aVBudHdiM04wTG5ScGRHeGxmVHd2YURRK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4d0lHTnNZWE56VG1GdFpUMWNJbkJ2YzNSc1pXUmxYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZTNCdmMzUXViR1ZrWlNBbUppQndiM04wTG14bFpHVXVjM1ZpYzNSeWFXNW5LREFzSURZMUtTQXJJQ2N1TGk0bmZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwzQStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHdJR05zWVhOelRtRnRaVDFjSW5CdmMzUjBhVzFsWENJK1VIVmliR2xqWVhScGIyNGdSR0YwWlRvZ2UyQWtlM0J2YzNRdVpHRjVmU0J2WmlBa2UzQnZjM1F1Ylc5dWRHaDlMQ0FrZTNCdmMzUXVlV1ZoY24xZ2ZUd3ZjRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ0FnSUNBZ0lEd3ZZVDQ4TDB4cGJtcytYRzRnSUNBZ0lDQWdJRHd2YkdrK1hHNGdJQ0FnSUNBcEtYMWNiaUFnSUNBOEwzVnNQbHh1SUNBZ0lEeHpkSGxzWlNCcWMzZytlMkJjYmlBZ0lDQWdJQzVzYVc1cklIdGNiaUFnSUNBZ0lDQWdZMjlzYjNJNklIWmhjaWd0TFdFc0lDTkdNRGd3T0RBcE8xeHVJQ0FnSUNBZ0lDQjBaWGgwTFdSbFkyOXlZWFJwYjI0NklHNXZibVU3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM1c2FXNXJPbWh2ZG1WeUlENGdMbkJ2YzNSallYSmtMRnh1SUNBZ0lDQWdMbXhwYm1zNlptOWpkWE1nUGlBdWNHOXpkR05oY21RZ2UxeHVJQ0FnSUNBZ0lDQmliM2d0YzJoaFpHOTNPaUF3SURBZ01XVnRJREFnZG1GeUtDMHRZaXdnSXpReE5qbEZNU2s3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM1c2FYTjBJSHRjYmlBZ0lDQWdJQ0FnYkdsemRDMXpkSGxzWlRvZ2JtOXVaVHRjYmlBZ0lDQWdJQ0FnWkdsemNHeGhlVG9nWjNKcFpEdGNiaUFnSUNBZ0lDQWdaM0pwWkMxMFpXMXdiR0YwWlMxamIyeDFiVzV6T2lBeFpuSWdNV1p5SURGbWNqdGNiaUFnSUNBZ0lDQWdaM0pwWkMxbllYQTZJREZsYlR0Y2JpQWdJQ0FnSUNBZ2JXRnlaMmx1T2lBeWNtVnRJREE3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM1d2IzTjBZMkZ5WkNCN1hHNGdJQ0FnSUNBZ0lHMWhjbWRwYmpvZ01DQmhkWFJ2TzF4dUlDQWdJQ0FnSUNCdFlYZ3RkMmxrZEdnNklESTFjbVZ0TzF4dUlDQWdJQ0FnSUNCd1lXUmthVzVuT2lBeFpXMDdYRzRnSUNBZ0lDQWdJR0p2Y21SbGNpMXlZV1JwZFhNNklEVndlRHRjYmlBZ0lDQWdJQ0FnYUdWcFoyaDBPaUF4TURBbE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQXVjRzl6ZEhScGRHeGxJSHRjYmlBZ0lDQWdJQ0FnWm05dWRDMTNaV2xuYUhRNklHSnZiR1E3WEc0Z0lDQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ01uSmxiVHRjYmlBZ0lDQWdJQ0FnYldGeVoybHVMV0p2ZEhSdmJUb2dNV1Z0TzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnTG5CdmMzUjBhVzFsSUh0Y2JpQWdJQ0FnSUNBZ1kyOXNiM0k2SUhaaGNpZ3RMV0l0YlhWMFpXUXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdMbkJ2YzNSc1pXUmxJSHRjYmlBZ0lDQWdJQ0FnWm05dWRDMXphWHBsT2lBeExqSTFjbVZ0TzF4dUlDQWdJQ0FnSUNCdFlYSm5hVzQ2SUM0MVpXMGdNRHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJRUJ0WldScFlTQnpZM0psWlc0Z1lXNWtJQ2h0YVc0dGQybGtkR2c2SURRMWNtVnRLU0I3WEc0Z0lDQWdJQ0FnSUM1d2IzTjBZMkZ5WkNCN1hHNGdJQ0FnSUNBZ0lDQWdkMmxzYkMxamFHRnVaMlU2SUdKdmVDMXphR0ZrYjNjN1hHNGdJQ0FnSUNBZ0lDQWdZbTk0TFhOb1lXUnZkem9nTUNBd0lERmxiU0F3SUNObFpXVTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJR0I5UEM5emRIbHNaVDVjYmlBZ1BDOXpaV04wYVc5dVBseHVLVHRjYmlKZGZRPT0gKi9cbi8qQCBzb3VyY2VVUkw9dXRpbHMvZmVlZGFwcC5qcyAqLyJdfQ== */'
  }));
};