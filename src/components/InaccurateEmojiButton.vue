<template>
	<button @click="handleClick" class="toolButton selectable border-2 bg-discord-500 text-white hover:bg-discord-200 rounded-lg m-2 inline-flex align-center p-2 cursor-pointer">
		Show inaccurate emojis
	</button>
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
		}
	}
}
</script>
