'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

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