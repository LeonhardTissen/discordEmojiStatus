<template>
	<SampleElement msg="Hello, World!"/>
</template>

<script lang="ts">
import SampleElement from './components/SampleElement.vue';

export default {
	name: 'App',
	components: {
		SampleElement
	}
}
</script>

<style>
@font-face {
	font-family: Geist;
	src: url(./assets/fonts/GeistVF.woff2) type(woff2);
}
:root {
	--main: #232324;
	--main-text: #FFF;
}
body {
	background-color: var(--main);
	color: var(--main-text);
	margin: 0;
}
#app {
	font-family: Geist, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
