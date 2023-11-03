<template>
	<div class="flex flex-wrap items-center justify-center">
		<button
			@click="handleClick"
			class="toolButton selectable border-2 bg-discord-500 text-white hover:bg-discord-200 rounded-lg m-1 inline-flex align-center p-2 cursor-pointer">
			Show inaccurate emojis
		</button>
		<button
			@click="helpEmojis"
			class="border-2 bg-discord-500 text-white rounded-full w-7 h-7 flex justify-center items-center">
			?
		</button>
	</div>
</template>
  
<script lang="ts">
let inaccurateEmojis = false;

export default {
	name: 'InaccurateEmojiButton',
	methods: {
		handleClick: (ev: MouseEvent) => {
			const target = ev.target as HTMLElement;

			inaccurateEmojis = !inaccurateEmojis;
			
			target.innerText = inaccurateEmojis ? 'Hide inaccurate emojis' : 'Show inaccurate emojis';

			document.querySelectorAll<HTMLElement>('.colorButton[data-inaccurate=true]').forEach((element: HTMLElement) => {
				element.style.display = inaccurateEmojis ? 'block' : 'none';
			})
		},
		helpEmojis: () => {
			alert('Inaccurate emojis will appear differently on discord as they\'re non-square emojis, but the colors will be overall the same.');
		}
	}
}
</script>
