<template>
	<div class="container my-5">
		<AppButtons color="danger" size="sm">Modal window</AppButtons>
		<teleport to="body">
			<AppModal v-if="modal" @close="modal" />
		</teleport>
	</div>
</template>

<script>
import AppButtons from "../src/components/AppButtons.vue";
import AppModal from "../src/components/AppModal.vue";

export default {
	name: "App",
	components: {
		AppButtons,
		AppModal,
	},
	data() {
		return {
			modal: false,
		};
	},
};
</script>

<style lang="scss">
</style>
