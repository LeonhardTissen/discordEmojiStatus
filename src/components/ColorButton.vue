<template>
	<button
		:class="{ 'selected': def }"
		@click="handleClick"
		class="colorButton selectable hover:brightness-125 rounded-lg w-8 h-8 inline-flex align-center p-2 cursor-pointer flex-grow"
		:style="{backgroundColor: color }"
	/>
</template>
  
<script lang="ts">
import { selectOnlyThis } from '../dom';

export default {
	name: 'ColorButton',
	props: {
		color: String,
		def: Boolean
	},
	methods: {
		handleClick: (ev: MouseEvent) => {
			selectOnlyThis('colorButton', ev.target as HTMLElement);
		}
	}
}
</script>
	
<style scoped>

</style>
  