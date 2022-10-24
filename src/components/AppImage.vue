<template>
	<i :class="[size, 'mdi', `mdi-${name}`]" :style="{ color: color }" />
</template>

<script>
export default {
	name: "AppImage",
	props: {
		name: {
			type: String,
			default: "file-pdf-box",
		},
		color: {
			type: String,
			default: "white",
		},
		size: {
			type: String,
			default: "md",
		},
	},
};
</script>

<style>
</style>