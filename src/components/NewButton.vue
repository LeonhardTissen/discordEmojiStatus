<template>
	<button
		@click="handleClick"
		class="colorButton text-white bg-discord-500 m-1 border-2 selectable hover:brightness-125 rounded-lg align-center p-2 cursor-pointer"
	>
		Reset
	</button>
</template>
  
<script lang="ts">
import { resetData } from '../screen';

export default {
	name: 'TypeButton',
	methods: {
		handleClick: () => {
			if (confirm('Are you sure you want to start fresh?')) {
				resetData();
			}
		}
	}
}
</script>
