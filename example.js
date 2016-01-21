require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var BurnerTimer = require('burner-timer');

var App = React.createClass({
	displayName: 'App',

	render: function render() {

		var timerProps = {
			totalTime: 20 * 1000, // ms
			consumedTime: 0, // ms
			progressColor: '#5c6bc0',
			size: 120
		};

		/*textToDisplay: 'BlaBla',*/
		return React.createElement(
			'div',
			null,
			React.createElement(BurnerTimer, timerProps)
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"burner-timer":undefined,"react":undefined,"react-dom":undefined}]},{},[1]);
