import React, {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import {drawCoord} from './utils/timer';

var BurnerTimer = React.createClass({
	propTypes: {
		consumedTime: PropTypes.number.isRequired, // in ms
		progressColor: PropTypes.string,
		size: PropTypes.number.isRequired,
		textToDisplay: PropTypes.string,
		totalTime: PropTypes.number.isRequired, // in ms
	},
	render(){

		let degrees, {totalTime, consumedTime, size, textToDisplay} = this.props;
		
		let width = size * 2;
		let height = size * 2;
		let radius = size;
		let x = size;
		let y = size;

		if ( !totalTime || ( !consumedTime && consumedTime !== 0 ) ){
			return;
		}
		
		let percentageConsumed = consumedTime ? (consumedTime / totalTime) : 0;
		degrees = 3.6 * (percentageConsumed * 100);
		textToDisplay = textToDisplay || (Math.floor( (totalTime - consumedTime)/ 1000 ));
		
		return (

			<svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" version="1.1">

				<defs>
					<radialGradient id="shadow_1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
						<stop offset="50%" stopColor="#444" stopOpacity="1"/>
						<stop offset="50%" stopColor="#000" stopOpacity="0.3"/>
						<stop offset="55%" stopColor="#000" stopOpacity="0"/>

						<stop offset="90%" stopColor="#000" stopOpacity="0"/>
						<stop offset="100%" stopColor="#000" stopOpacity="0.4"/>
					</radialGradient>
				</defs>

				<circle cx={x} cy={y} r={radius} fill="#333"/>

				<path ref="progress" d={drawCoord(x, radius, degrees)} fill={this.props.progressColor}/>

				<circle cx={x} cy={y} r={radius} fill="url(#shadow_1)"/>

				<text ref="textValue" x={x} y={y + 10} textAnchor="middle" fill="#fff"
					  style={{fontSize:24, fontFamily:'Arial'}}>
					{textToDisplay}
				</text>

			</svg>

		);
	},
});

export default BurnerTimer;
