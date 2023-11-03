<template>
	<button
		@click="handleClick"
		class="colorButton text-white bg-discord-500 m-2 border-2 selectable hover:brightness-125 rounded-lg align-center p-2 cursor-pointer"
	>
		Export
	</button>
</template>
  
<script lang="ts">
export default {
	name: 'ExportButton',
	methods: {
		handleClick: () => {
			console.log('Export');
		}
	}
}
</script>
