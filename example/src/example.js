var React = require('react');
var ReactDOM = require('react-dom');
var BurnerTimer = require('burner-timer');

var App = React.createClass({
	render () {
		
		let timerProps = {
			totalTime: 20 * 1000, // ms
			consumedTime : 0, // ms
			progressColor: '#5c6bc0',
			size: 120,
			/*textToDisplay: 'BlaBla',*/
		};
		
		return (
			<div>
				<BurnerTimer {...timerProps}/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
