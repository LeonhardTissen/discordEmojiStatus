<template>
	<div class="bg-discord h-screen w-screen fixed">
		<ScreenElement/>
		<ToolSidebar/>
	</div>
</template>

<script lang="ts">
import ScreenElement from './components/ScreenElement.vue';
import ToolSidebar from './components/ToolSidebar.vue';

export default {
	name: 'App',
	components: {
    ToolSidebar,
    ScreenElement
}
}
</script>

<style>
@font-face {
	font-family: Geist;
	src: url(./assets/fonts/GeistVF.woff2) type(woff2);
}
#app {
	font-family: Geist, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
