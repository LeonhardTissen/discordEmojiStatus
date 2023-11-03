<template>
	<div id="sample" class="text-cyan-300 text-3xl m-20 text-center">{{ msg }}</div>
</template>
  
<script lang="ts">
export default {
	name: 'SampleElement',
	props: {
		msg: String
	}
}
</script>
	
<style scoped>

</style>
  