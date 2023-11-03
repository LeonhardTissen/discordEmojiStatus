<template>
	<button
		@click="handleClick"
		:data-exporter="text"
		class="colorButton text-white bg-discord-500 m-1 border-2 selectable hover:brightness-125 rounded-lg align-center p-2 cursor-pointer"
	>
		{{ text }}
	</button>
</template>
  
<script lang="ts">
import { getData, getDimensions } from '../screen';
import { writeToClipboard } from '../clipboard'
import { getType } from '../arrangements';
import { hideOutputs } from '../dom';
import { encode } from '../encoder';

export default {
	name: 'CopyButton',
	props: {
		text: String,
	},
	methods: {
		handleClick: (ev: MouseEvent) => {
			const exporter = (ev.target as HTMLElement).getAttribute('data-exporter');

			const { prefix, width, height, successMessage } = getType();
			const rowsSeperator = '\n';

			const rawData = getData();

			const slicedData = rawData
				.slice(0, height)
				.map((a) => a.slice(0, width))

			if (exporter === 'Share') {
				const dim = getDimensions();
				window.location.hash = encode(slicedData, dim.width, dim.height);

				writeToClipboard(window.location.href, 'URL copied to clipboard');

				return;
			}

			const finalResult = prefix + slicedData
				.map((a) => a.join(''))
				.join(rowsSeperator);

			if (exporter === 'Export') {
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
			} else if (exporter === 'Copy') {
				writeToClipboard(finalResult, successMessage);
			}
		}
	}
}
</script>
