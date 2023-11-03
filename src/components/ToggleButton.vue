<template>
	<button :class="{ 'toggled': def }" @click="handleClick" class="toolButton selectable border-2 bg-discord-500 hover:bg-discord-200 rounded-lg w-16 h-16 m-1 inline-flex align-center p-2 cursor-pointer">
		<img :src="'../icons/' + icon + '.svg'" class="color-white invert pointer-events-none">
	</button>
</template>
  
<script lang="ts">
import { setGap } from '@/screen';
import { toggleClass } from '../dom';

export default {
	name: 'ToolButton',
	props: {
		icon: String,
		def: Boolean
	},
	methods: {
		handleClick: (ev: MouseEvent) => {
			const toggled = toggleClass('toggled', ev.target as HTMLElement);
			setGap(toggled ? 0 : 1);
		}
	}
}
</script>
