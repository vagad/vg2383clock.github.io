function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	var h = hour();
	var m = minute();
	var s = second();
	background(225);
	textSize(32);
	
	let hf = map(h, 0, 24, 0, 200, true);
	let mf = map(m, 0, 60, 0, 200, true);
	let sf = map(s, 0, 60, 0, 200, true);
  
	fill(229,255,204);
	ellipse(100, 150, 200);
	fill(0,102,51);
	ellipse(100, 150, hf);
	
	fill(204,229,255);
	ellipse(300, 150, 200);
	fill(0,51,102);
	ellipse(300, 150, mf);
	
	fill(255,229,204);
	ellipse(500, 150, 200);
	fill(255,12,0);
	ellipse(500, 150, sf);
	
	fill(128,255,0);
	text(hour(), 100, 150);
	textAlign(CENTER,CENTER);
	fill(51,255,255);
	text(minute(), 300, 150);
	textAlign(CENTER,CENTER);
	fill(255,153,51);
	text(second(), 500, 150);
	textAlign(CENTER,CENTER);
	
	fill(0);
	text("H", 100, 35);
	textAlign(CENTER,CENTER);
	fill(0);
	text("M", 300, 35);
	textAlign(CENTER,CENTER);
	fill(0);
	text("S", 500, 35);
	textAlign(CENTER,CENTER);
}
