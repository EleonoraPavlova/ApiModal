<template>
	<i :class="[size, 'mdi', `mdi-${name}`]" :style="{ color: color }" />
</template>

<script>
export default {
	name: "AppIcon",
	props: {
		name: {
			type: String,
			default: "list-box-outline",
		},
		color: {
			type: String,
			default: "white",
		},
		size: {
			type: String,
			default: "sm",
		},
	},
};
</script>
