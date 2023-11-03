<template>
	<button
		@click="handleClick"
		id="setSizeButton"
		class="colorButton hidden text-white bg-discord-500 m-2 border-2 selectable hover:brightness-125 rounded-lg align-center p-2 cursor-pointer"
	>
		Set Size
	</button>
</template>
  
<script lang="ts">
import { arrangementTypes } from '@/arrangements';
import { setDimensions, maxSize } from '../screen';

export default {
	name: 'SetSizeButton',
	methods: {
		handleClick: () => {
			const widthPrompt = prompt('Enter width:');
			if (widthPrompt === null) return;

			const width = parseInt(widthPrompt);
			
			if (width < 1 || width > maxSize) {
				alert(`Invalid width (must be 1 - ${maxSize})`)
				return;
			}

			const heightPrompt = prompt('Enter height:')
			if (heightPrompt === null) return;

			const height = parseInt(heightPrompt);

			if (height < 1 || height > maxSize) {
				alert(`Invalid height (must be 1 - ${maxSize})`)
				return;
			}

			setDimensions(width, height);

			// Update the "Custom" type
			const customType = arrangementTypes.find((a) => a.name === 'Custom');

			if (customType === undefined) return;

			customType.width = width;
			customType.height = height;
		}
	}
}
</script>
