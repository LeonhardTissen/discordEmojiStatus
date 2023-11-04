<template>
	<button 
	@click=handleClick
	:data-type="type"
	class="bg-discord-400 text-white m-1 text-3xl w-8 h-8 inline-flex justify-center items-center rounded-full">{{ type }}</button>
</template>

<script lang="ts">
import { zoom } from '@/screen';

	export default {
		name: 'ZoomButton',
		props: {
			type: String
		},
		methods: {
			handleClick(event: MouseEvent) {
				const target = event.target as HTMLElement;

				const type = target.getAttribute('data-type');
				if (type === null) return;

				if (type === '+') {
					zoom(false);
				} else if (type === '-') {
					zoom(true);
				}
			}
		}
	}
</script>
