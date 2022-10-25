<template>
	<div class="container py-5">
		<AppButtons color="danger" size="sm" @click="showModal()">{{
			isVisibleModal ? "Hide " : "Modal window"
		}}</AppButtons>
		<div v-if="show && !isVisibleModal" class="black m-5 text-start">
			<h6>You choosed:</h6>
			<p>{{ chosen }}</p>
		</div>
		<div v-if="showAnything" class="m-4">
			<h6 class="dangerous fw-lighter m-0 text-start">
				You didn't choose anything
			</h6>
		</div>

		<AppModal
			v-if="isVisibleModal"
			@close="isVisibleModal = null"
			@formGenerated="onFormGenerated"
		/>
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
			chosen: [],
			show: false,
			showAnything: false,
		};
	},
	methods: {
		showModal() {
			this.isVisibleModal = !this.isVisibleModal;
			this.showAnything = false;
		},
		onFormGenerated(value) {
			this.chosen = value;
			this.isVisibleModal = null;
			this.show = true;
			if (this.chosen.length === 0) {
				this.show = false;
				this.showAnything = true;
			}

			console.log(value);
		},
	},
};
</script>

<style lang="scss">
</style>
