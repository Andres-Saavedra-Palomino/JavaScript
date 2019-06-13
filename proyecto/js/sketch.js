let x = 0;
let y = 0;
let spacing = 100;
var canvas;
function setup() {
	canvas = createCanvas(2000, 2000);
	canvas.position(0, 0)
	canvas.style('z-index', '-1');
	canvas.style('background-color', '#2980b9');
}
/* function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
	setup()
	x = 0;
	y = 0;
} */

function draw() {
	strokeWeight(10);
	stroke('white');
	if (random(1) < 0.5) {
		line(x, y, x + spacing, y + spacing);
	} else {
		line(x, y + spacing, x + spacing, y);
	}
	x = x + spacing;
	if (x > width) {
		x = 0;
		y = y + spacing;
	}

}