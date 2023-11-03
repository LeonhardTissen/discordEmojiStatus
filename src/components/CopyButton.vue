<template>
	<button
		@click="handleClick"
		:data-export="exporter"
		class="colorButton text-white bg-discord-500 m-2 border-2 selectable hover:brightness-125 rounded-lg align-center p-2 cursor-pointer"
	>
		{{ exporter ? "Export" : "Copy" }}
	</button>
</template>
  
<script lang="ts">
import { getData } from '../screen';
import { writeToClipboard } from '../clipboard'
import { getType } from '../arrangements';
import { hideOutputs } from '../dom';

export default {
	name: 'CopyButton',
	props: {
		exporter: Boolean,
	},
	methods: {
		handleClick: (ev: MouseEvent) => {
			const exporter = (ev.target as HTMLElement).getAttribute('data-export');

			const { prefix, width, height, successMessage } = getType();
			const rowsSeperator = '\n';

			const rawData = getData();
			const finalResult = prefix + rawData
				.slice(0, height)
				.map((a) => a.slice(0, width))
				.map((a) => a.join(''))
				.join(rowsSeperator);

			if (exporter === 'true') {
				hideOutputs();

				const textarea = document.createElement('textarea');

				textarea.rows = height + (prefix.length > 0 ? 1 : 0);
				textarea.cols = width * 2 + 4;
				textarea.style.fontSize = `${Math.floor(300 / Math.max(width, height))}px`;

				textarea.value = finalResult;
				textarea.classList.add('output');
				textarea.addEventListener('wheel', (ev) => {
					ev.preventDefault();
				})

				document.body.appendChild(textarea);
			} else {
				writeToClipboard(finalResult, successMessage);
			}
		}
	}
}
</script>
