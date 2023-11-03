export enum Emoji {
	Red = '🟥',
	Orange = '🟧',
	Yellow = '🟨',
	Green = '🟩',
	Blue = '🟦',
	Purple = '🟪',
	Brown = '🟫',
	Black = '⬛',
	White = '⬜',
}

export let emoji: Emoji = Emoji.Red;

export function setEmoji(new_emoji: Emoji): void {
	emoji = new_emoji;
}

export const emojiColors: Record<Emoji, string> = {
	[Emoji.Red]: '#DD2E44',
	[Emoji.Orange]: '#F4900C',
	[Emoji.Yellow]: '#FDCB58',
	[Emoji.Green]: '#78B159',
	[Emoji.Blue]: '#55ACEE',
	[Emoji.Purple]: '#AA8ED6',
	[Emoji.Brown]: '#C1694F',
	[Emoji.White]: '#E6E7E8',
	[Emoji.Black]: '#31373D',
}
