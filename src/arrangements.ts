interface ArrangementType {
	name: string
	width: number,
	height: number,
	successMessage: string
	prefix: string
}

export const arrangementTypes: Array<ArrangementType> = [
	{
		name: 'Status',
		width: 13,
		height: 5,
		successMessage: 'Copied to clipboard! Now paste it into your discord status.',
		prefix: '',
	},
	{
		name: 'Hover',
		width: 8,
		height: 8,
		successMessage: 'Copied to clipboard! Now paste it into your discord status.',
		prefix: '⸻Hover on me!⸻\n',
	},
	{
		name: 'About me',
		width: 13,
		height: 6,
		successMessage: 'Copied to clipboard! Now paste it into your discord\'s about me.',
		prefix: '',
	},
	{
		name: 'Custom',
		width: 20,
		height: 20,
		successMessage: 'Copied to clipboard!',
		prefix: '',
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
