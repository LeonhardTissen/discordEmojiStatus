<template>
	<div id="toolbar" class="h-full bg-discord-500-a backdrop-blur-sm fixed top-0 left-0 flex items-center justify-center flex-col">
		<div class="flex justify-center flex-wrap">
			<TypeButton/>
			<NewButton/>
		</div>
		<DividerElement/>
		<div class="flex flex-wrap justify-center">
			<ToolButton icon="pencil" def/>
			<ToolButton icon="brush"/>
			<ToolButton icon="bucket"/>
			<ToggleButton icon="grid"/>
		</div>
		<div class="rounded-lg border-2 m-2 p-1 flex justify-center flex-wrap bg-discord-200">
			<ColorButton v-for="(color, emoji) in emojiColors" :key="emoji" :color="color" :def="emoji === Emoji.Red" />
		</div>
		<DividerElement/>
		<div class="flex justify-center flex-wrap">
			<CopyButton/>
			<ExportButton/>
		</div>
	</div>
</template>
  
<script lang="ts">
import ToolButton from './ToolButton.vue';
import ToggleButton from './ToggleButton.vue';
import TypeButton from './TypeButton.vue';
import NewButton from './NewButton.vue';
import CopyButton from './CopyButton.vue';
import ExportButton from './ExportButton.vue';
import ColorButton from './ColorButton.vue';
import { emojiColors, Emoji } from '../emoji';
import DividerElement from './DividerElement.vue';

export default {
    name: 'ToolSidebar',
    components: {
		ToolButton,
		ToggleButton,
		ColorButton,
		TypeButton,
		NewButton,
		DividerElement,
		CopyButton,
		ExportButton
	},
	data() {
		return { emojiColors, Emoji }
	}
}
</script>
	
<style scoped>
	#toolbar {
		width: clamp(124px, 25%, 320px);
	}
</style>
  