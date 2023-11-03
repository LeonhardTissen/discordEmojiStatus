import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string';
import { Emoji } from './emoji';

interface HashData {
	width: number,
	height: number,
	data: Array<Array<Emoji>>
}

export function encode(data: Array<Array<Emoji>>, width: number, height: number): string {
	const hashData: HashData = { data, width, height };
	return compressToEncodedURIComponent(JSON.stringify(hashData));
}

export function decode(data: string): HashData {
	return JSON.parse(decompressFromEncodedURIComponent(data));
}
