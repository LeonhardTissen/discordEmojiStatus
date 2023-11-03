import { Emoji, emoji, emojiColors } from './emoji';
import { leftMousePressed, middleMousePressed, spacePressed } from './input';
import { Tool, tool } from './tool';

let cvs: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;

const sidebarWidth = 320;
const initialSize = 60;
const initialWidth = 13;
const initialHeight = 5;
const initialGap = 1;

export type DataLayer<T> = Array<Array<T>>;

export function generateEmptyLayer<T>(width: number, height: number, def: T): DataLayer<T> {
	return new Array(height).fill(def).map(() => new Array(width).fill(def));
}

const con = {
	x: (window.innerWidth + sidebarWidth - initialSize * initialWidth) / 2,
	y: (window.innerHeight - initialSize * initialHeight) / 2,
	width: initialWidth,
	height: initialHeight,
	size: initialSize,
	gap: initialGap,
	data: generateEmptyLayer<Emoji>(initialWidth, initialHeight, Emoji.White),
}

export function initScreen(): void {
	cvs = document.getElementById('screen') as HTMLCanvasElement;

	ctx = cvs.getContext('2d');

	if (ctx === null) return;

	window.addEventListener('resize', resize);
	window.addEventListener('mousemove', mouseMove);

	resize();

	window.requestAnimationFrame(tick);
}

function resize(): void {
	if (cvs === null) return;

	cvs.width = window.innerWidth;
	cvs.height = window.innerHeight;
}

function mouseMove(event: MouseEvent): void {
	if (spacePressed || middleMousePressed) {
		con.x += event.movementX;
		con.y += event.movementY;
	} else if (leftMousePressed) {
		const pixelSize = con.size + con.gap;
		const x = Math.floor((event.clientX - con.x) / pixelSize);
		const y = Math.floor((event.clientY - con.y) / pixelSize);
		
		if (tool === Tool.Pencil) {
			setPixel(x, y, emoji);
		} else if (tool === Tool.Brush) {
			setPixel(x, y, emoji);
			setPixel(x + 1, y, emoji);
			setPixel(x, y + 1, emoji);
			setPixel(x - 1, y, emoji);
			setPixel(x, y - 1, emoji);
		}
	}
}

function setPixel(x: number, y: number, emoji: Emoji): void {
	if (x < 0 || y < 0 || x >= con.width || y >= con.height) return;

	con.data[y][x] = emoji;
}

function tick(): void {
	if (ctx === null) return;

	ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

	for (let y = 0; y < con.height; y ++) {
		for (let x = 0; x < con.width; x ++) {
			ctx.fillStyle = emojiColors[con.data[y][x]]
			const px = Math.round(con.x + x * (con.size + con.gap));
			const py = Math.round(con.y + y * (con.size + con.gap));

			ctx.fillRect(px, py, con.size, con.size);
		}	
	}

	window.requestAnimationFrame(tick);
}

export function setCursor(cursor: string): void {
	if (cvs === null) return;

	cvs.style.cursor = cursor;
}
