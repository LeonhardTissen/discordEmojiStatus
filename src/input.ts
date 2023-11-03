import { hideOutputs } from "./dom";
import { Emoji, emoji } from "./emoji";
import { causeClick, setCursor, zoom } from "./screen";

export let spacePressed = false;
export let middleMousePressed = false;
export let leftMousePressed = false;
export let rightMousePressed = false;

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


export function mouseDown(event: MouseEvent) {
	if (event.button === 1) {
		middleMousePressed = true;
		setCursor('move');
	} else if (event.button === 0) {
		leftMousePressed = true;
		hideOutputs();
		causeClick(emoji);
	} else if (event.button === 2) {
		rightMousePressed = true;
		causeClick(Emoji.White);
	}
}
  
export function mouseUp(event: MouseEvent) {
	if (event.button === 1) {
		middleMousePressed = false;
		setCursor('crosshair');
	} else if (event.button === 0) {
		leftMousePressed = false;
	} else if (event.button === 2) {
		rightMousePressed = false;
	}
}

export function mouseWheel(event: WheelEvent) {
	zoom(event.deltaY > 0);
}

export function contextMenu(event: MouseEvent) {
	event.preventDefault();
}
