var D3Node = require('d3-node');
var Canvas = require('canvas');

var d3CloudToSVG = (wordCount) => {
    return new Promise(resolve => {
        cloud()
            .canvas(function () {
                return new Canvas(1, 1);
            })
            .size([width, height])
            .words(wordCount)
            .padding(0)
            .rotate(function () {
                return ~~(Math.random() * 120) - 60;
            })
            .font('Impact')
            .fontSize(function (d) {
                return d.size;
            })
            .on('end', function (wordCount) {
                resolve(drawD3Cloud(wordCount));
            })
            .start();
    });
};
module.exports = d3CloudToSVG;