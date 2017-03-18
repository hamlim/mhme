'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('whatwg-fetch');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _header = require('../../components/header');

var _header2 = _interopRequireDefault(_header);

var _subnav = require('../../components/subnav');

var _subnav2 = _interopRequireDefault(_subnav);

var _feedapp = require('../../utils/feedapp');

var _feedapp2 = _interopRequireDefault(_feedapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matt/development/mhme/pages/blog/feed.js?entry';


var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      feed: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('/static/json/posts.json').then(function (r) {
        return r.json();
      }).then(function (feed) {
        _this2.setState({ feed: feed });
      }).catch(function (err) {
        return console.warn(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('main', { className: 'Feed', 'data-jsx': 3402450892,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('title', {
        'data-jsx': 3402450892,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'My Feed of Blog Posts')), _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement(_subnav2.default, { page: 'feed', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement('article', { className: 'wrapper', 'data-jsx': 3402450892,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('h2', {
        'data-jsx': 3402450892,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'Feed:'), this.state.feed.length > 0 ? _react2.default.createElement(_feedapp2.default, { feed: this.state.feed, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }) : _react2.default.createElement('div', { className: 'loading', 'data-jsx': 3402450892,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: 3402450892,
        css: '.wrapper[data-jsx="3402450892"] {margin-top: 3rem;max-width: var(--width, 45rem);margin-left: auto;margin-right: auto;}.container[data-jsx="3402450892"] {max-width: var(--width-s, 35rem);margin: 0 auto;}.lead[data-jsx="3402450892"] {font-size: 2.4rem;max-width: var(--width, 45rem);margin: 0 auto;}.body[data-jsx="3402450892"] > p[data-jsx="3402450892"] {margin: 1em 0;}.link[data-jsx="3402450892"] {color: var(--a, #F08080);text-decoration: none;}@media screen and (max-width: 40rem) {.wrapper[data-jsx="3402450892"] {margin: 3rem .25em;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jsb2cvZmVlZC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ29CLEFBQ0EsaUNBQ1MsaUJBQ2MsK0JBQ2Isa0JBQ0MsbUJBQ3BCLENBRVcsbUNBQ3VCLGlDQUNsQixlQUNoQixDQUVNLDhCQUNhLGtCQUNhLCtCQUNoQixlQUNoQixDQUVVLHlEQUNLLGNBQ2YsQ0FFTSw4QkFDb0IseUJBQ0gsc0JBQ3ZCLENBRXFDLHNDQUMxQixpQ0FDVyxtQkFDcEIsQ0FDRiIsImZpbGUiOiJwYWdlcy9ibG9nL2ZlZWQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHQvZGV2ZWxvcG1lbnQvbWhtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICd3aGF0d2ctZmV0Y2gnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IFN1Ym5hdiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3N1Ym5hdic7XG5pbXBvcnQgRmVlZEFwcCBmcm9tICcuLi8uLi91dGlscy9mZWVkYXBwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBmZWVkOiBbXVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGZldGNoKCcvc3RhdGljL2pzb24vcG9zdHMuanNvbicpLnRoZW4ociA9PiB7XG4gICAgICByZXR1cm4gci5qc29uKCk7XG4gICAgfSkudGhlbihmZWVkID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2ZlZWR9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS53YXJuKGVycikpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJGZWVkXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5NeSBGZWVkIG9mIEJsb2cgUG9zdHM8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPFN1Ym5hdiBwYWdlPVwiZmVlZFwiLz5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgIDxoMj5GZWVkOjwvaDI+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZmVlZC5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgPEZlZWRBcHAgZmVlZD17dGhpcy5zdGF0ZS5mZWVkfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj48L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS13aWR0aCwgNDVyZW0pO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IHZhcigtLXdpZHRoLXMsIDM1cmVtKTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sZWFkIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS13aWR0aCwgNDVyZW0pO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJvZHkgPiBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMWVtIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWEsICNGMDgwODApO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwcmVtKSB7XG4gICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogM3JlbSAuMjVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9tYWluPlxuICAgIClcbiAgfVxufTtcblxuIl19 */\n/*@ sourceURL=pages/blog/feed.js?entry */'
      }));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;

;