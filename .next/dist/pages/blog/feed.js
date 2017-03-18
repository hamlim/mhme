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
      return _react2.default.createElement('main', { className: 'Feed', 'data-jsx': 3402450892
      }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
        'data-jsx': 3402450892
      }, 'My Feed of Blog Posts')), _react2.default.createElement(_header2.default, null), _react2.default.createElement(_subnav2.default, { page: 'feed' }), _react2.default.createElement('article', { className: 'wrapper', 'data-jsx': 3402450892
      }, _react2.default.createElement('h2', {
        'data-jsx': 3402450892
      }, 'Feed:'), this.state.feed.length > 0 ? _react2.default.createElement(_feedapp2.default, { feed: this.state.feed }) : _react2.default.createElement('div', { className: 'loading', 'data-jsx': 3402450892
      })), _react2.default.createElement(_style2.default, {
        styleId: 3402450892,
        css: '.wrapper[data-jsx="3402450892"] {margin-top: 48px;margin-top: 3rem;max-width: 720px;max-width: 45rem;margin-left: auto;margin-right: auto;}.container[data-jsx="3402450892"] {max-width: 560px;max-width: 35rem;margin: 0 auto;}.lead[data-jsx="3402450892"] {font-size: 38.4px;font-size: 2.4rem;max-width: 720px;max-width: 45rem;margin: 0 auto;}.body[data-jsx="3402450892"] > p[data-jsx="3402450892"] {margin: 1em 0;}.link[data-jsx="3402450892"] {color: #F08080;text-decoration: none;}@media screen and (max-width: 40rem) {.wrapper[data-jsx="3402450892"] {margin: 3rem .25em;}}'
      }));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;

;