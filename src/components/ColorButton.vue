<template>
	<button
		:class="{ 'selected': def }"
		@click="handleClick"
		:data-color="color"
		class="colorButton selectable hover:brightness-125 rounded-lg w-8 h-8 inline-flex align-center p-2 cursor-pointer"
		:style="{backgroundColor: color}"
	/>
</template>
  
<script lang="ts">
import { Emoji, emojiColors, setEmoji } from '@/emoji';
import { selectOnlyThis } from '../dom';

export default {
	name: 'ColorButton',
	props: {
		color: String,
		def: Boolean
	},
	methods: {
		handleClick: (ev: MouseEvent) => {
			const target = ev.target as HTMLElement;
			selectOnlyThis('colorButton', target);
			const color = target.getAttribute('data-color');
			if (color === null) return;
			
			for (const [key, value] of Object.entries(emojiColors)) {
				if (color === value) {
					setEmoji(key as Emoji);
				}
			}
		}
	}
}
</script>

<style scoped>
	.colorButton[data-inaccurate=true] {
		display: none;
	}
</style>
