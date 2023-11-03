interface ArrangementType {
	name: string
	width: number,
	height: number
}

export const arrangement_types: Array<ArrangementType> = [
	{
		name: 'Status',
		width: 13,
		height: 5,
	},
	{
		name: 'Hover',
		width: 8,
		height: 8,
	},
	{
		name: 'About me',
		width: 13,
		height: 6,
	},
	{
		name: 'Custom',
		width: 20,
		height: 20,
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
