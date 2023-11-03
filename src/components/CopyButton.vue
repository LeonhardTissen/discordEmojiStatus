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
				//
			} else {
				writeToClipboard(finalResult, successMessage);
			}
		}
	}
}
</script>
