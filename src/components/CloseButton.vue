<template>
	<button
		type="button"
		class="btn-close-white"
		:class="[size]"
		aria-label="Close"
		@click="$emit('click')"
	/>
</template>

<script>
export default {
	name: "CloseButton",
	props: {
		size: {
			type: String,
			default: "clxs",
		},
	},
	emits: ["click"],
};
</script>

<style lang="scss">
.clxs {
	width: 2px;
	height: 2px;
}
.btn-close {
	&:focus {
		box-shadow: none !important;
	}
}
</style>