<template>
	<button :data-tool="icon" :class="{ 'selected': def }" @click="handleClick" class="toolButton selectable border-2 hover:bg-discord-200 rounded-lg w-16 h-16 m-2 inline-flex align-center p-2 cursor-pointer">
		<img :src="'../icons/' + icon + '.svg'" class="color-white invert pointer-events-none">
	</button>
</template>
  
<script lang="ts">
import { stringToolMap, setTool } from '../tool';
import { selectOnlyThis } from '../dom';

export default {
	name: 'ToolButton',
	props: {
		icon: String,
		def: Boolean
	},
	methods: {
		handleClick: (ev: MouseEvent) => {
			const target = ev.target as HTMLElement;
			selectOnlyThis('toolButton', target);
			const tool = target.getAttribute('data-tool');
			if (tool === null) return;
			setTool(stringToolMap[tool]);
		}
	}
}
</script>
	
<style scoped>

</style>
  