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
	Pink = '♀️',
	DarkBlue = '☑️',
	Space = '🌌',
	Gray = '🌫️',
	DarkGray = '🌑',
	DarkGreen = '🌳',
	Tangerine = '📙',
	Beige = '📔',
	LightYellow = '🌕',
	DarkPurple = '☮️',
	MidBlue = '🏧',
	DeepRed = '🇹🇳',
}

export let emoji: Emoji = Emoji.Red;

export function setEmoji(new_emoji: Emoji): void {
	emoji = new_emoji;
}

export const inaccurateEmojis = [
	Emoji.Pink,
	Emoji.DarkBlue,
	Emoji.Space,
	Emoji.Gray,
	Emoji.DarkGray,
	Emoji.DarkGreen,
	Emoji.Tangerine,
	Emoji.Beige,
	Emoji.LightYellow,
	Emoji.DarkPurple,
	Emoji.MidBlue,
	Emoji.DeepRed,
];

export const emojiColors: Record<Emoji, string> = {
	[Emoji.DeepRed]: '#E70013',
	[Emoji.Red]: '#DD2E44',
	[Emoji.Pink]: '#EA596E',
	[Emoji.Orange]: '#F4900C',
	[Emoji.Tangerine]: '#FFAC33',
	[Emoji.Yellow]: '#FDCB58',
	[Emoji.LightYellow]: '#FFD983',
	[Emoji.Green]: '#78B159',
	[Emoji.DarkGreen]: '#5C913B',
	[Emoji.Blue]: '#55ACEE',
	[Emoji.MidBlue]: '#3B88C3',
	[Emoji.DarkBlue]: '#226699',
	[Emoji.Purple]: '#AA8ED6',
	[Emoji.DarkPurple]: '#9266CC',
	[Emoji.Space]: '#553788',
	[Emoji.Brown]: '#C1694F',
	[Emoji.Beige]: '#D99E82',
	[Emoji.White]: '#E6E7E8',
	[Emoji.Gray]: '#CCD6DD',
	[Emoji.DarkGray]: '#66757F',
	[Emoji.Black]: '#31373D',
}
