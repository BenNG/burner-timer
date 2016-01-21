(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.BurnerTimer = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _utilsTimer = require('./utils/timer');

var BurnerTimer = _react2['default'].createClass({
	displayName: 'BurnerTimer',

	propTypes: {
		consumedTime: _react.PropTypes.number.isRequired, // in ms
		progressColor: _react.PropTypes.string,
		size: _react.PropTypes.number.isRequired,
		textToDisplay: _react.PropTypes.string,
		totalTime: _react.PropTypes.number.isRequired },
	// in ms
	render: function render() {
		var degrees = undefined;var _props = this.props;
		var totalTime = _props.totalTime;
		var consumedTime = _props.consumedTime;
		var size = _props.size;
		var textToDisplay = _props.textToDisplay;

		var width = size * 2;
		var height = size * 2;
		var radius = size;
		var x = size;
		var y = size;

		if (!totalTime || !consumedTime && consumedTime !== 0) {
			return;
		}

		var percentageConsumed = consumedTime ? consumedTime / totalTime : 0;
		degrees = 3.6 * (percentageConsumed * 100);
		textToDisplay = textToDisplay || (totalTime - Math.floor(consumedTime)) / 1000;

		return _react2['default'].createElement(
			'svg',
			{ width: width, height: height, xmlns: 'http://www.w3.org/2000/svg', version: '1.1' },
			_react2['default'].createElement(
				'defs',
				null,
				_react2['default'].createElement(
					'radialGradient',
					{ id: 'shadow_1', cx: '50%', cy: '50%', r: '50%', fx: '50%', fy: '50%' },
					_react2['default'].createElement('stop', { offset: '50%', stopColor: '#444', stopOpacity: '1' }),
					_react2['default'].createElement('stop', { offset: '50%', stopColor: '#000', stopOpacity: '0.3' }),
					_react2['default'].createElement('stop', { offset: '55%', stopColor: '#000', stopOpacity: '0' }),
					_react2['default'].createElement('stop', { offset: '90%', stopColor: '#000', stopOpacity: '0' }),
					_react2['default'].createElement('stop', { offset: '100%', stopColor: '#000', stopOpacity: '0.4' })
				)
			),
			_react2['default'].createElement('circle', { cx: x, cy: y, r: radius, fill: '#333' }),
			_react2['default'].createElement('path', { ref: 'progress', d: (0, _utilsTimer.drawCoord)(x, radius, degrees), fill: this.props.progressColor }),
			_react2['default'].createElement('circle', { cx: x, cy: y, r: radius, fill: 'url(#shadow_1)' }),
			_react2['default'].createElement(
				'text',
				{ ref: 'textValue', x: x, y: y + 10, textAnchor: 'middle', fill: '#fff',
					style: { fontSize: 24, fontFamily: 'Arial' } },
				textToDisplay || ''
			)
		);
	}
});

exports['default'] = BurnerTimer;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./utils/timer":2,"react-dom":undefined}],2:[function(require,module,exports){
'use strict';

var drawCoord = function drawCoord(x, radius, degrees) {
    var offset = x - radius;

    var radians = degrees * Math.PI / 180;

    var rX = radius + offset + Math.sin(radians) * radius;
    var rY = radius + offset - Math.cos(radians) * radius;

    if (!rX || !rY) {
        return '';
    }

    var dir = degrees > 180 ? 1 : 0;

    var coord = 'M' + (radius + offset) + ',' + (radius + offset) + ' ' + 'L' + (radius + offset) + ',' + offset + ' ' + 'A' + radius + ',' + radius + ' 0 ' + dir + ',1 ' + rX + ',' + rY;

    return coord;
};

module.exports = {
    drawCoord: drawCoord
};

},{}]},{},[1])(1)
});