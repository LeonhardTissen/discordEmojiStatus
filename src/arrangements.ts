type ArrangementType = {
	name: string;
	width: number;
	height: number;
	successMessage: string;
	prefix: string;
	newLine: string;
}

export const arrangementTypes: Array<ArrangementType> = [
	{
		name: 'Status',
		width: 13,
		height: 5,
		successMessage: 'Copied to clipboard! Now paste it into your discord status.',
		prefix: '',
		newLine: '\n',
	},
	{
		name: 'Hover',
		width: 9,
		height: 7,
		successMessage: 'Copied to clipboard! Now paste it into your discord status.',
		prefix: '⸻Hover on me!⸻\n',
		newLine: '\n'
	},
	{
		name: 'About me',
		width: 13,
		height: 6,
		successMessage: 'Copied to clipboard! Now paste it into your discord\'s about me.',
		prefix: '',
		newLine: '\n',
	},
	{
		name: 'Custom',
		width: 20,
		height: 20,
		successMessage: 'Copied to clipboard!',
		prefix: '',
		newLine: '\n',
	}
];

let typeIndex: number = 0;

export function cycleTypeIndex(): ArrangementType {
	typeIndex = (typeIndex + 1) % arrangementTypes.length;
	return getType();
}

export function getType(): ArrangementType {
	return arrangementTypes[typeIndex];
}
