<template>
	<button
		@click="handleClick"
		class="colorButton text-white bg-discord-500 m-1 border-2 selectable hover:brightness-125 rounded-lg align-center p-2 cursor-pointer"
	>
		Type: Status
	</button>
</template>
  
<script lang="ts">
import { setDimensions } from '../screen';
import { cycleTypeIndex } from '../arrangements';

export default {
	name: 'TypeButton',
	methods: {
		handleClick: (ev: MouseEvent) => {
			const target = ev.target as HTMLElement;

			const type = cycleTypeIndex();

			target.innerText = `Type: ${type.name}`;

			setDimensions(type.width, type.height);

			const setSizeButton = document.getElementById('setSizeButton') as HTMLElement;
			setSizeButton.style.display = type.name === "Custom" ? 'block' : 'none';
		}
	}
}
</script>
