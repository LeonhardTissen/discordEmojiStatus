<template>
	<div class="bg-discord h-screen w-screen fixed">
		<canvas id="screen" class="fixed top-0 left-0 cursor-crosshair"/>
		<ToolSidebar/>
		<div class="fixed top-0 right-0 m-2">
			<ZoomButton type="+"/>
			<ZoomButton type="-"/>
		</div>
	</div>
</template>

<script lang="ts">
import ToolSidebar from './components/ToolSidebar.vue';
import ZoomButton from './components/ZoomButton.vue';

export default {
	name: 'App',
	components: { ToolSidebar, ZoomButton }
}
</script>

<style>
@font-face {
	font-family: Geist;
	src: url(./assets/fonts/GeistVF.woff2) format(woff2);
}
#app {
	font-family: Geist, Helvetica, Arial, sans-serif;
	font-weight: 100;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
#screen {
	background-image: url(./assets/imgs/grid.png);
	background-size: 121px;
	image-rendering: pixelated;
}
</style>
