<template>
	<button :class="{ 'selected': def }" @click="handleClick" class="toolButton selectable border-2 hover:bg-discord-200 rounded-lg w-16 h-16 m-2 inline-flex align-center p-2 cursor-pointer">
		<img :src="'../icons/' + icon + '.svg'" class="color-white invert pointer-events-none">
	</button>
</template>
  
<script lang="ts">
import { selectOnlyThis } from '../dom';

export default {
	name: 'IconButton',
	props: {
		icon: String,
		def: Boolean
	},
	methods: {
		handleClick: (ev: MouseEvent) => {
			selectOnlyThis('toolButton', ev.target as HTMLElement);
		}
	}
}
</script>
	
<style scoped>

</style>
  