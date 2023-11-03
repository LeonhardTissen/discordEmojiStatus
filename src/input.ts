import { setCursor } from "./screen";

export let spacePressed = false;
export let middleMousePressed = false;
export let leftMousePressed = false;

document.addEventListener('keydown', (event) => {
	if (event.code === 'Space') {
		spacePressed = true;
		setCursor('move');
	}
});

document.addEventListener('keyup', (event) => {
	if (event.code === 'Space') {
		spacePressed = false;
		setCursor('crosshair');
	}
});


document.addEventListener('mousedown', (event) => {
	if (event.button === 1) {
		middleMousePressed = true;
		setCursor('move');
	} else if (event.button === 0) {
		leftMousePressed = true;
	}
});
  
  document.addEventListener('mouseup', (event) => {
	if (event.button === 1) {
		middleMousePressed = false;
		setCursor('crosshair');
	} else if (event.button === 0) {
		leftMousePressed = false;
	}
});
