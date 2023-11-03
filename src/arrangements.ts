interface ArrangementType {
	name: string
	width: number,
	height: number,
	successMessage: string
	prefix: string
}

export const arrangement_types: Array<ArrangementType> = [
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

export let type_index: number = 0;

export function cycleTypeIndex(): ArrangementType {
	type_index = (type_index + 1) % arrangement_types.length;
	return getType();
}

export function getType(): ArrangementType {
	return arrangement_types[type_index];
}
