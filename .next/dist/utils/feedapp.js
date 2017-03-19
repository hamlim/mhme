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

exports.default = function (_ref) {
  var feed = _ref.feed;
  return _react2.default.createElement('section', { className: 'wrap', 'data-jsx': 1086178353
  }, _react2.default.createElement('ul', { className: 'list', 'data-jsx': 1086178353
  }, feed.map(function (post, index) {
    return _react2.default.createElement('li', { key: index, 'data-jsx': 1086178353
    }, _react2.default.createElement(_link2.default, { href: post.route ? post.route : { pathname: '/blog/post', query: { slug: '' + post.slug } } }, _react2.default.createElement('a', { className: 'link', 'data-jsx': 1086178353
    }, _react2.default.createElement('div', { className: 'postcard', 'data-jsx': 1086178353
    }, _react2.default.createElement('h4', { className: 'posttitle', 'data-jsx': 1086178353
    }, post.title), _react2.default.createElement('p', { className: 'postlede', 'data-jsx': 1086178353
    }, post.lede && post.lede.substring(0, 65) + '...'), _react2.default.createElement('p', { className: 'posttime', 'data-jsx': 1086178353
    }, 'Publication Date: ', post.day + ' of ' + post.month + ', ' + post.year)))));
  })), _react2.default.createElement(_style2.default, {
    styleId: 1086178353,
    css: '.link[data-jsx="1086178353"] {color: #F08080;text-decoration: none;}.link[data-jsx="1086178353"]:hover > .postcard[data-jsx="1086178353"],.link[data-jsx="1086178353"]:focus > .postcard[data-jsx="1086178353"] {box-shadow: 0 10px 5em -30px #4169E1;}.list[data-jsx="1086178353"] {list-style: none;}.postcard[data-jsx="1086178353"] {margin: 0 auto;max-width: 400px;max-width: 25rem;padding: 1em;border-radius: 5px;}.posttitle[data-jsx="1086178353"] {font-weight: bold;font-size: 32px;font-size: 2rem;margin-bottom: 1em;}.posttime[data-jsx="1086178353"] {color: var(--b-muted);}.postlede[data-jsx="1086178353"] {font-size: 20px;font-size: 1.25rem;margin: .5em 0;}@media screen and (min-width: 45rem) {.postcard[data-jsx="1086178353"] {will-change: box-shadow;box-shadow: 0 10px 5em -30px #F08080;margin: 0 auto 3rem;}}'
  }));
};