<template>
	<div class="w-80 h-full bg-discord-400 fixed top-0 left-0">
		<div id="buttons" class="flex">
			<TypeButton/>
		</div>
		<div id="tools">
			<ToolButton icon="pencil" def/>
			<ToolButton icon="brush"/>
			<ToolButton icon="bucket"/>
			<ToggleButton icon="grid"/>
		</div>
		<hr class="border-discord-200 border-2">
		<div id="colors" class="rounded-lg border-2 m-2 p-1 flex justify-center">
			<ColorButton v-for="(color, emoji) in emojiColors" :key="emoji" :color="color" :def="emoji === Emoji.Red" />
		</div>
	</div>
</template>
  
<script lang="ts">
import ToolButton from './ToolButton.vue';
import ToggleButton from './ToggleButton.vue';
import TypeButton from './TypeButton.vue';
import ColorButton from './ColorButton.vue';
import { emojiColors, Emoji } from '../emoji';

export default {
    name: 'ToolSidebar',
    components: {
		ToolButton,
		ToggleButton,
		ColorButton,
		TypeButton,
	},
	data() {
		return { emojiColors, Emoji }
	}
}
</script>
	
<style scoped>

</style>
  