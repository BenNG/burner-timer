let drawCoord = (x, radius, degrees) => {
    let offset = x - radius;

    let radians = degrees * Math.PI / 180;

    let rX = radius + offset + Math.sin(radians) * radius;
    let rY = radius + offset - Math.cos(radians) * radius;

	if(!rX || !rY){
		return "";
	}
	
    let dir = (degrees > 180) ? 1 : 0;

    let coord = 'M' + (radius + offset) + ',' + (radius + offset) + ' ' +
        'L' + (radius + offset) + ',' + offset + ' ' +
        'A' + radius + ',' + radius + ' 0 ' + dir + ',1 ' +
        rX + ',' + rY;

    return coord;
};

module.exports = {
    drawCoord,
};
