<template>
	<div class="container py-5">
		<AppButtons color="danger" size="sm" @click="showModal()">{{
			isVisibleModal ? "Hide " : "Modal window"
		}}</AppButtons>

		<AppModal v-if="isVisibleModal" @close="isVisibleModal = null" />
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
			isVisibleModal: false,
		};
	},
	methods: {
		showModal() {
			this.isVisibleModal = !this.isVisibleModal;
		},
	},
};
</script>

<style lang="scss">
</style>
