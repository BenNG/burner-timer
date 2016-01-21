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