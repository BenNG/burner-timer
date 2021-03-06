# burner-timer

Yet another timer component in React


## Demo & Examples

Live demo: [BenNG.github.io/burner-timer](http://BenNG.github.io/burner-timer/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use burner-timer is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/burner-timer.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install burner-timer --save
```


## Usage

```
import BurnerTimer from 'burner-timer';

let timerProps = {
	totalTime: 20 * 1000, // ms
	consumedTime : 2000, // ms
	progressColor: '#5c6bc0',
	size: 120,
	/*textToDisplay: 'BlaBla',*/
};

<BurnerTimer {...timerProps}/>
```

### Properties

* totalTime: 20 * 1000, // ms
* consumedTime : 2000, // ms
* progressColor: '#5c6bc0',
* size: 120,
* /*textToDisplay: 'BlaBla',*/

Live demo: [BenNG.github.io/burner-timer](http://BenNG.github.io/burner-timer/)

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

__PUT LICENSE HERE__

Copyright (c) 2016 BenNG.

