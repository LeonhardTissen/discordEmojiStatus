import { Emoji, emoji, emojiColors } from './emoji';
import { leftMousePressed, middleMousePressed, rightMousePressed, spacePressed } from './input';
import { Tool, tool } from './tool';

let cvs: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;

const sidebarWidth = 320;
const initialSize = 60;
const initialWidth = 13;
const initialHeight = 5;
const initialGap = 1;

const maxSize = 30;

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
	data: generateEmptyLayer<Emoji>(maxSize, maxSize, Emoji.White),
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

export function zoom(zoom_in: boolean): void {
	con.size *= zoom_in ? 0.9 : 1.11111;
	con.size = Math.round(Math.max(5, Math.min(con.size, 100)));
}

export function setGap(size: number): void {
	con.gap = size;
}

export function setDimensions(width: number, height: number): void {
	con.width = width;
	con.height = height;
}
export function getDimensions(): { width: number, height: number} {
	return { width: con.width, height: con.height };
}

export function resetData(): void {
	con.data = generateEmptyLayer<Emoji>(maxSize, maxSize, Emoji.White);
}

export function getData(): Array<Array<Emoji>> {
	return con.data;
}

function resize(): void {
	if (cvs === null) return;

	cvs.width = window.innerWidth;
	cvs.height = window.innerHeight;
}

function mouseMove(event: MouseEvent): void {
	const pixelSize = con.size + con.gap;
	const x = Math.floor((event.clientX - con.x) / pixelSize);
	const y = Math.floor((event.clientY - con.y) / pixelSize);

	if (spacePressed || middleMousePressed) {
		con.x += event.movementX;
		con.y += event.movementY;
	} else if (leftMousePressed || rightMousePressed) {
		const toPlace = rightMousePressed ? Emoji.White : emoji;
		
		if (tool === Tool.Pencil) {
			setPixel(x, y, toPlace);
		} else if (tool === Tool.Brush) {
			setPixel(x, y, toPlace);
			setPixel(x + 1, y, toPlace);
			setPixel(x, y + 1, toPlace);
			setPixel(x - 1, y, toPlace);
			setPixel(x, y - 1, toPlace);
		} else if (tool === Tool.Bucket) {
			iterateBucket(x, y, toPlace, con.data[y][x]);
		}
	}
}

const neighbours: Array<[number, number]> = [
	[1, 0],
	[0, 1],
	[-1,0],
	[0,-1],
];

function iterateBucket(x: number, y: number, toPlace: Emoji, toReplace: Emoji): boolean {
	const hasPlaced = setPixel(x, y, emoji);

	if (!hasPlaced) return false;

	neighbours.forEach((neighbour) => {
		const nx = x + neighbour[0];
		const ny = y + neighbour[1];
		if (!isOutOfBounds(nx, ny) && con.data[ny][nx] === toReplace) {
			iterateBucket(nx, ny, toPlace, toReplace);
		}
	});

	return true;
}

function isOutOfBounds(x: number, y: number): boolean {
	return x < 0 || y < 0 || x >= con.width || y >= con.height;
}

function setPixel(x: number, y: number, emoji: Emoji): boolean {
	if (isOutOfBounds(x, y) || con.data[y][x] === emoji) return false;

	con.data[y][x] = emoji;

	return true;
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
