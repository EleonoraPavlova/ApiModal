<template>
	<div class="position-relative container py-5">
		<AppButtons color="danger" size="sm" @click="showModal()">{{
			isVisibleModal ? "Hide " : "Modal window"
		}}</AppButtons>
		<div>
			<AppModal v-model:show="isVisibleModal" @close="closeModal()" />
		</div>
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
		closeModal() {
			debugger;
			this.isVisibleModal = null;
		},
	},
};
</script>

<style lang="scss">
</style>
