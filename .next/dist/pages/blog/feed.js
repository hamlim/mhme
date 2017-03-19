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
        css: '.wrapper[data-jsx="3402450892"] {margin-top: 48px;margin-top: 3rem;max-width: 720px;max-width: 45rem;margin-left: auto;margin-right: auto;}.container[data-jsx="3402450892"] {max-width: 560px;max-width: 35rem;margin: 0 auto;}.lead[data-jsx="3402450892"] {font-size: 38.4px;font-size: 2.4rem;max-width: 720px;max-width: 45rem;margin: 0 auto;}.body[data-jsx="3402450892"] > p[data-jsx="3402450892"] {margin: 1em 0;}.link[data-jsx="3402450892"] {color: #F08080;text-decoration: none;}@media screen and (max-width: 40rem) {.wrapper[data-jsx="3402450892"] {margin: 3rem .25em;}}\n/*@ sourceURL=pages/blog/feed.js?entry */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0L2RldmVsb3BtZW50L21obWUvcGFnZXMvYmxvZy9mZWVkLmpzP2VudHJ5IiwicGFnZXMvYmxvZy9mZWVkLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Db0IsaUNBRVMsaUJBQ2MsQUFEZCxpQkFDYyxpQkFDYixBQURhLGlCQUNiLGtCQUNDLG1CQUNwQixDQUVXLG1DQUN1QixpQkFDbEIsQUFEa0IsaUJBQ2xCLGVBQ2hCLENBRU0sOEJBQ2Esa0JBQ2EsQUFEYixrQkFDYSxpQkFDaEIsQUFEZ0IsaUJBQ2hCLGVBQ2hCLENBRVUseURBQ0ssY0FDZixDQUVNLDhCQUNvQixlQUNILHNCQUN2QixDQUVxQyxzQ0FDMUIsaUNBQ1csbUJBQ3BCLENBQ0YsQ0FBQTtBQ2pFWCx5Q0FBeUMiLCJmaWxlIjoidG8uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ3doYXR3Zy1mZXRjaCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgU3VibmF2IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc3VibmF2JztcbmltcG9ydCBGZWVkQXBwIGZyb20gJy4uLy4uL3V0aWxzL2ZlZWRhcHAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGZlZWQ6IFtdXG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZmV0Y2goJy9zdGF0aWMvanNvbi9wb3N0cy5qc29uJykudGhlbihyID0+IHtcbiAgICAgIHJldHVybiByLmpzb24oKTtcbiAgICB9KS50aGVuKGZlZWQgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmVlZH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLndhcm4oZXJyKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIkZlZWRcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPk15IEZlZWQgb2YgQmxvZyBQb3N0czwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8U3VibmF2IHBhZ2U9XCJmZWVkXCIvPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgPGgyPkZlZWQ6PC9oMj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5mZWVkLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8RmVlZEFwcCBmZWVkPXt0aGlzLnN0YXRlLmZlZWR9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgICAgICBtYXgtd2lkdGg6IHZhcigtLXdpZHRoLCA0NXJlbSk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogdmFyKC0td2lkdGgtcywgMzVyZW0pO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxlYWQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICAgICAgICBtYXgtd2lkdGg6IHZhcigtLXdpZHRoLCA0NXJlbSk7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm9keSA+IHAge1xuICAgICAgICAgICAgbWFyZ2luOiAxZW0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGluayB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYSwgI0YwODA4MCk7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDByZW0pIHtcbiAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAzcmVtIC4yNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gIFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L21haW4+XG4gICAgKVxuICB9XG59O1xuXG4iLCIud3JhcHBlcltkYXRhLWpzeD1cIjM0MDI0NTA4OTJcIl0ge21hcmdpbi10b3A6IDNyZW07bWF4LXdpZHRoOiB2YXIoLS13aWR0aCwgNDVyZW0pO21hcmdpbi1sZWZ0OiBhdXRvO21hcmdpbi1yaWdodDogYXV0bzt9LmNvbnRhaW5lcltkYXRhLWpzeD1cIjM0MDI0NTA4OTJcIl0ge21heC13aWR0aDogdmFyKC0td2lkdGgtcywgMzVyZW0pO21hcmdpbjogMCBhdXRvO30ubGVhZFtkYXRhLWpzeD1cIjM0MDI0NTA4OTJcIl0ge2ZvbnQtc2l6ZTogMi40cmVtO21heC13aWR0aDogdmFyKC0td2lkdGgsIDQ1cmVtKTttYXJnaW46IDAgYXV0bzt9LmJvZHlbZGF0YS1qc3g9XCIzNDAyNDUwODkyXCJdID4gcFtkYXRhLWpzeD1cIjM0MDI0NTA4OTJcIl0ge21hcmdpbjogMWVtIDA7fS5saW5rW2RhdGEtanN4PVwiMzQwMjQ1MDg5MlwiXSB7Y29sb3I6IHZhcigtLWEsICNGMDgwODApO3RleHQtZGVjb3JhdGlvbjogbm9uZTt9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDByZW0pIHsud3JhcHBlcltkYXRhLWpzeD1cIjM0MDI0NTA4OTJcIl0ge21hcmdpbjogM3JlbSAuMjVlbTt9fVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5CaFoyVnpMMkpzYjJjdlptVmxaQzVxY3o5bGJuUnllU0pkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZ0UTI5Q0xFRkJRMEVzYVVOQlExTXNhVUpCUTJNc0swSkJRMklzYTBKQlEwTXNiVUpCUTNCQ0xFTkJSVmNzYlVOQlEzVkNMR2xEUVVOc1FpeGxRVU5vUWl4RFFVVk5MRGhDUVVOaExHdENRVU5oTEN0Q1FVTm9RaXhsUVVOb1FpeERRVVZWTEhsRVFVTkxMR05CUTJZc1EwRkZUU3c0UWtGRGIwSXNlVUpCUTBnc2MwSkJRM1pDTEVOQlJYRkRMSE5EUVVNeFFpeHBRMEZEVnl4dFFrRkRjRUlzUTBGRFJpSXNJbVpwYkdVaU9pSndZV2RsY3k5aWJHOW5MMlpsWldRdWFuTS9aVzUwY25raUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhRdlpHVjJaV3h2Y0cxbGJuUXZiV2h0WlNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCU1pXRmpkQ3dnZTBOdmJYQnZibVZ1ZEgwZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJQ2QzYUdGMGQyY3RabVYwWTJnbk8xeHVhVzF3YjNKMElFaGxZV1FnWm5KdmJTQW5ibVY0ZEM5b1pXRmtKenRjYm1sdGNHOXlkQ0JJWldGa1pYSWdabkp2YlNBbkxpNHZMaTR2WTI5dGNHOXVaVzUwY3k5b1pXRmtaWEluTzF4dWFXMXdiM0owSUZOMVltNWhkaUJtY205dElDY3VMaTh1TGk5amIyMXdiMjVsYm5SekwzTjFZbTVoZGljN1hHNXBiWEJ2Y25RZ1JtVmxaRUZ3Y0NCbWNtOXRJQ2N1TGk4dUxpOTFkR2xzY3k5bVpXVmtZWEJ3Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nWlhoMFpXNWtjeUJEYjIxd2IyNWxiblFnZTF4dUlDQnpkR0YwWlNBOUlIdGNiaUFnSUNCbVpXVmtPaUJiWFZ4dUlDQjlYRzRnSUdOdmJYQnZibVZ1ZEVScFpFMXZkVzUwS0NrZ2UxeHVJQ0FnSUdabGRHTm9LQ2N2YzNSaGRHbGpMMnB6YjI0dmNHOXpkSE11YW5OdmJpY3BMblJvWlc0b2NpQTlQaUI3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdjaTVxYzI5dUtDazdYRzRnSUNBZ2ZTa3VkR2hsYmlobVpXVmtJRDArSUh0Y2JpQWdJQ0FnSUhSb2FYTXVjMlYwVTNSaGRHVW9lMlpsWldSOUtUdGNiaUFnSUNCOUtTNWpZWFJqYUNobGNuSWdQVDRnWTI5dWMyOXNaUzUzWVhKdUtHVnljaWtwTzF4dUlDQjlYRzVjYmlBZ2NtVnVaR1Z5S0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUFvWEc0Z0lDQWdJQ0E4YldGcGJpQmpiR0Z6YzA1aGJXVTlYQ0pHWldWa1hDSStYRzRnSUNBZ0lDQWdJRHhJWldGa1BseHVJQ0FnSUNBZ0lDQWdJRHgwYVhSc1pUNU5lU0JHWldWa0lHOW1JRUpzYjJjZ1VHOXpkSE04TDNScGRHeGxQbHh1SUNBZ0lDQWdJQ0E4TDBobFlXUStYRzRnSUNBZ0lDQWdJRHhJWldGa1pYSWdMejVjYmlBZ0lDQWdJQ0FnUEZOMVltNWhkaUJ3WVdkbFBWd2labVZsWkZ3aUx6NWNiaUFnSUNBZ0lDQWdQR0Z5ZEdsamJHVWdZMnhoYzNOT1lXMWxQVndpZDNKaGNIQmxjbHdpUGx4dUlDQWdJQ0FnSUNBZ0lEeG9NajVHWldWa09qd3ZhREkrWEc0Z0lDQWdJQ0FnSUNBZ2UzUm9hWE11YzNSaGRHVXVabVZsWkM1c1pXNW5kR2dnUGlBd0lEOGdLRnh1SUNBZ0lDQWdJQ0FnSUNBZ1BFWmxaV1JCY0hBZ1ptVmxaRDE3ZEdocGN5NXpkR0YwWlM1bVpXVmtmU0F2UGx4dUlDQWdJQ0FnSUNBZ0lDa2dPaUFvWEc0Z0lDQWdJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpUbUZ0WlQxY0lteHZZV1JwYm1kY0lqNDhMMlJwZGo1Y2JpQWdJQ0FnSUNBZ0lDQXBmVnh1SUNBZ0lDQWdJQ0E4TDJGeWRHbGpiR1UrWEc0Z0lDQWdJQ0FnSUR4emRIbHNaU0JxYzNnK2UyQmNiaUFnSUNBZ0lDQWdJQ0F1ZDNKaGNIQmxjaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnRZWEpuYVc0dGRHOXdPaUF6Y21WdE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYldGNExYZHBaSFJvT2lCMllYSW9MUzEzYVdSMGFDd2dORFZ5WlcwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYldGeVoybHVMV3hsWm5RNklHRjFkRzg3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnRZWEpuYVc0dGNtbG5hSFE2SUdGMWRHODdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdMbU52Ym5SaGFXNWxjaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnRZWGd0ZDJsa2RHZzZJSFpoY2lndExYZHBaSFJvTFhNc0lETTFjbVZ0S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzFoY21kcGJqb2dNQ0JoZFhSdk8xeHVJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDNXNaV0ZrSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTWk0MGNtVnRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JXRjRMWGRwWkhSb09pQjJZWElvTFMxM2FXUjBhQ3dnTkRWeVpXMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JXRnlaMmx1T2lBd0lHRjFkRzg3WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnTG1KdlpIa2dQaUJ3SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzFoY21kcGJqb2dNV1Z0SURBN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0xteHBibXNnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjlzYjNJNklIWmhjaWd0TFdFc0lDTkdNRGd3T0RBcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdWNGRDMWtaV052Y21GMGFXOXVPaUJ1YjI1bE8xeHVJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lFQnRaV1JwWVNCelkzSmxaVzRnWVc1a0lDaHRZWGd0ZDJsa2RHZzZJRFF3Y21WdEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdWQzSmhjSEJsY2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUcxaGNtZHBiam9nTTNKbGJTQXVNalZsYlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNCOUlDQmNiaUFnSUNBZ0lDQWdZSDA4TDNOMGVXeGxQbHh1SUNBZ0lDQWdQQzl0WVdsdVBseHVJQ0FnSUNsY2JpQWdmVnh1ZlR0Y2JseHVJbDE5ICovXG4vKkAgc291cmNlVVJMPXBhZ2VzL2Jsb2cvZmVlZC5qcz9lbnRyeSAqLyJdfQ== */'
      }));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;

;