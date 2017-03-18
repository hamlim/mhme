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
  return _react2.default.createElement('section', { className: 'wrap', 'data-jsx': 1086178353,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('ul', { className: 'list', 'data-jsx': 1086178353,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, feed.map(function (post, index) {
    return _react2.default.createElement('li', { key: index, 'data-jsx': 1086178353,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, _react2.default.createElement(_link2.default, { href: { pathname: '/blog/post', query: { slug: '' + post.slug } }, __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }, _react2.default.createElement('a', { className: 'link', 'data-jsx': 1086178353,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }, _react2.default.createElement('div', { className: 'postcard', 'data-jsx': 1086178353,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, _react2.default.createElement('h4', { className: 'posttitle', 'data-jsx': 1086178353,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, post.title), _react2.default.createElement('p', { className: 'postlede', 'data-jsx': 1086178353,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, post.lede && post.lede.substring(0, 65) + '...'), _react2.default.createElement('p', { className: 'posttime', 'data-jsx': 1086178353,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, 'Publication Date: ', post.day + ' of ' + post.month + ', ' + post.year)))));
  })), _react2.default.createElement(_style2.default, {
    styleId: 1086178353,
    css: '.link[data-jsx="1086178353"] {color: var(--a, #F08080);text-decoration: none;}.link[data-jsx="1086178353"]:hover > .postcard[data-jsx="1086178353"],.link[data-jsx="1086178353"]:focus > .postcard[data-jsx="1086178353"] {box-shadow: 0 10px 5em -30px var(--b, #4169E1);}.list[data-jsx="1086178353"] {list-style: none;}.postcard[data-jsx="1086178353"] {margin: 0 auto;max-width: 25rem;padding: 1em;border-radius: 5px;}.posttitle[data-jsx="1086178353"] {font-weight: bold;font-size: 2rem;margin-bottom: 1em;}.posttime[data-jsx="1086178353"] {color: var(--b-muted);}.postlede[data-jsx="1086178353"] {font-size: 1.25rem;margin: .5em 0;}@media screen and (min-width: 45rem) {.postcard[data-jsx="1086178353"] {will-change: box-shadow;box-shadow: 0 10px 5em -30px var(--a, #F08080);margin: 0 auto 3rem;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2ZlZWRhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JnQixBQUNILDhCQUNvQix5QkFDSCxzQkFDdkIsQ0FHd0IsNklBQ3dCLCtDQUNoRCxDQUVNLDhCQUNZLGlCQUNsQixDQUVVLGtDQUNNLGVBQ0UsaUJBQ0osYUFDTSxtQkFDcEIsQ0FFVyxtQ0FDUSxrQkFDRixnQkFDRyxtQkFDcEIsQ0FDVSxrQ0FDYSxzQkFDdkIsQ0FDVSxrQ0FDVSxtQkFDSixlQUNoQixDQUNxQyxzQ0FDekIsa0NBQ2Usd0JBQ3VCLCtDQUMzQixvQkFDckIsQ0FDRiIsImZpbGUiOiJ1dGlscy9mZWVkYXBwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0L2RldmVsb3BtZW50L21obWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgKHtmZWVkfSkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3cmFwXCI+XG4gICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgIHtmZWVkLm1hcCgocG9zdCwgaW5kZXgpID0+IChcbiAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvYmxvZy9wb3N0JywgcXVlcnk6IHsgc2x1ZzogYCR7cG9zdC5zbHVnfWAgfX19PjxhIGNsYXNzTmFtZT1cImxpbmtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdGNhcmRcIj5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInBvc3R0aXRsZVwiPntwb3N0LnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3RsZWRlXCI+XG4gICAgICAgICAgICAgICAge3Bvc3QubGVkZSAmJiBwb3N0LmxlZGUuc3Vic3RyaW5nKDAsIDY1KSArICcuLi4nfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3R0aW1lXCI+UHVibGljYXRpb24gRGF0ZToge2Ake3Bvc3QuZGF5fSBvZiAke3Bvc3QubW9udGh9LCAke3Bvc3QueWVhcn1gfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT48L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5saW5rIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWEsICNGMDgwODApO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5saW5rOmhvdmVyID4gLnBvc3RjYXJkLFxuICAgICAgLmxpbms6Zm9jdXMgPiAucG9zdGNhcmQge1xuICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggNWVtIC0zMHB4IHZhcigtLWIsICM0MTY5RTEpO1xuICAgICAgfVxuXG4gICAgICAubGlzdCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5wb3N0Y2FyZCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDI1cmVtO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIH1cblxuICAgICAgLnBvc3R0aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgIH1cbiAgICAgIC5wb3N0dGltZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1iLW11dGVkKTtcbiAgICAgIH1cbiAgICAgIC5wb3N0bGVkZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgbWFyZ2luOiAuNWVtIDA7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NXJlbSkge1xuICAgICAgICAucG9zdGNhcmQge1xuICAgICAgICAgIHdpbGwtY2hhbmdlOiBib3gtc2hhZG93O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCA1ZW0gLTMwcHggdmFyKC0tYSwgI0YwODA4MCk7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG8gM3JlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuIl19 */\n/*@ sourceURL=utils/feedapp.js */'
  }));
};