<template>
	<div class="w-80 h-full bg-discord-400 fixed top-0 left-0">
		<div id="tools">
			<ToolButton icon="pencil" def/>
			<ToolButton icon="brush"/>
			<ToolButton icon="bucket"/>
			<ToggleButton icon="grid"/>
		</div>
		<hr class="border-discord-200 border-2">
		<div id="colors" class="rounded-lg border-2 m-2 p-1 flex justify-center">
			<ColorButton color="#DD2E44" def/>
			<ColorButton color="#F4900C"/>
			<ColorButton color="#FDCB58"/>
			<ColorButton color="#78B159"/>
			<ColorButton color="#55ACEE"/>
			<ColorButton color="#AA8ED6"/>
			<ColorButton color="#C1694F"/>
			<ColorButton color="#E6E7E8"/>
			<ColorButton color="#31373D"/>
		</div>
	</div>
</template>
  
<script lang="ts">
import ToolButton from './ToolButton.vue';
import ToggleButton from './ToggleButton.vue';
import ColorButton from './ColorButton.vue';

export default {
    name: 'ToolSidebar',
    components: {
		ToolButton,
		ToggleButton,
		ColorButton,
	}
}
</script>
	
<style scoped>

</style>
  