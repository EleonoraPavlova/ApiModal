<template>
	<div class="modal d-flex align-items-center position-relative">
		<div class="modal-dialog modal-lg m-0 px-2">
			<div class="d-flex">
				<AppIcon name="cancel" />
				<h5 class="text-start mb-0">Forms</h5>
				<div class="">
					<CloseButton class="btn-close" size="xs" @click="$emit('close')" />
				</div>
			</div>

			<hr class="mt-2" />
			<div class="d-flex justify-content-between align-items-center">
				<CardLeft />
				<CardRight />
			</div>
		</div>
	</div>
</template>

<script>
import CloseButton from "../components/CloseButton.vue";
import AppIcon from "../components/AppIcon.vue";
import CardRight from "../components/CardRight.vue";
import CardLeft from "../components/CardLeft.vue";

export default {
	name: "AppModal",
	components: {
		CloseButton,
		AppIcon,
		CardRight,
		CardLeft,
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
	top: 60px;
	width: 72%;
	height: 50%;
	padding: 1rem;
	background: rgba(6, 32, 55, 1);
	z-index: 1000;
	left: 50%;
	border-radius: 10px;
	transform: translateX(-50%);
	box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
}
.modal-dialog {
	width: 100% !important;
}
</style>