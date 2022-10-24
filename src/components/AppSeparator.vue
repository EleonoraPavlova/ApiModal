<template>
	<div
		class="vertical-panel d-flex justify-content-center align-items-center m-3"
	>
		<h6 class="mb-0 me-2">All Forms</h6>
		<button type="button" class="btn btn-light bg-white rounded-circle">
			<AppIcon name="chevron-up" color="bg-transparent" size="xs" />
		</button>
	</div>
</template>

<script>
import AppIcon from "../components/AppIcon.vue";

export default {
	name: "AppSeparator",
	components: {
		AppIcon,
	},
};
</script>

<style lang="scss" scoped>
.vertical-panel {
	transform: translate(19px, 32px) rotate(-91deg);
}
.btn {
	padding: 0;
}
</style>