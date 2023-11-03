<template>
	<button
		@click="handleClick"
		class="colorButton text-white bg-discord-500 m-2 border-2 selectable hover:brightness-125 rounded-lg align-center p-2 cursor-pointer"
	>
		Type: Status
	</button>
</template>
  
<script lang="ts">
import { setDimensions } from '../screen';

let type_index: number = 0;

interface ArrangementType {
	name: string
	width: number,
	height: number
}

const types: Array<ArrangementType> = [
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

export default {
	name: 'TypeButton',
	methods: {
		handleClick: (ev: MouseEvent) => {
			const target = ev.target as HTMLElement;

			type_index = (type_index + 1) % types.length;

			const new_type = types[type_index];

			target.innerText = `Type: ${new_type.name}`;

			setDimensions(new_type.width, new_type.height);
		}
	}
}
</script>
	
<style scoped>

</style>
  