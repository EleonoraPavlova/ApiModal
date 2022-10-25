<template>
	<div
		class="modal d-flex align-items-center position-relative"
		:class="{
			modal__collapsed: !isVisible,
		}"
	>
		<div class="m-0 px-2 width100">
			<div class="d-flex justify-content-between align-items-center">
				<div class="d-flex">
					<div class="me-2">
						<AppIcon name="ab-testing" />
					</div>
					<h5 class="mb-0">Forms</h5>
				</div>
				<div class="">
					<CloseButton class="btn-close" size="xs" @click="$emit('close')" />
				</div>
			</div>

			<hr class="mt-2" />
			<div class="d-flex justify-content-between align-items-start">
				<CardLeft @show="showAllForms" />
				<CardRight v-if="isVisible" />
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
	data() {
		return {
			isVisible: false,
		};
	},
	emits: ["close"],
	methods: {
		showAllForms() {
			this.isVisible = !this.isVisible;
		},
	},
};
</script>

<style lang="scss" scoped>
.modal {
	top: 60px;
	width: 77%;
	padding: 1rem;
	background: rgba(6, 32, 55, 1);
	z-index: 1000;
	left: 50%;
	border-radius: 10px;
	transform: translateX(-50%);
	box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
	//добавила класс на флаг isVisible, класс и стили меняется в зависимости от стостояния флага
	&__collapsed {
		width: 37%;
	}
}
.width100 {
	width: 100%;
}
</style>