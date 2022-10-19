<template>
	<div
		v-if="show"
		class="
			modal
			d-flex
			justify-content-center
			align-items-center
			position-relative
		"
	>
		<div class="modal-dialog modal-lg">
			<div class="card p-3">
				<h3>Title modal</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
					corporis, saepe architecto sequi qui repudiandae odit ex maxime
					voluptas aspernatur.
				</p>
				<div class="position-absolute top-0 end-0">
					<CloseButton class="btn-close" size="xs" @click="$emit('close')" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CloseButton from "../components/CloseButton.vue";

export default {
	name: "AppModal",
	components: {
		CloseButton,
	},
	props: {
		show: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["show", "close"],
	methods: {},
};
</script>

<style lang="scss" scoped>
.modal {
	position: fixed;
	top: 60px;
	width: 600px;
	padding: 1rem;
	background: #fff;
	z-index: 1000;
	left: 50%;
	border-radius: 10px;
	transform: translateX(-50%);
	box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
}
</style>