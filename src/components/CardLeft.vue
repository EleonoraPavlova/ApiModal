<template>
	<div class="d-flex">
		<div class="d-flex flex-column">
			<div class="d-flex align-items-center mb-2">
				<p class="mb-0">Matter number:</p>
				<AppInput />
			</div>
			<div class="d-flex justify-content-srart">
				<p class="mb-0">HARRITY &amp; HARRITY, LLP</p>
			</div>
			<AppSeparator />
			<div class="d-flex justify-content-end align-items-center">
				<AppButtons color="" class="bg-transparent btn-outline-info" size="md"
					>Generate</AppButtons
				>
			</div>
		</div>
	</div>
</template>

<script>
import AppInput from "../components/AppInput.vue";
import AppButtons from "../components/AppButtons.vue";
import AppSeparator from "../components/AppSeparator.vue";

export default {
	name: "CardLeft",
	components: {
		AppInput,
		AppButtons,
		AppSeparator,
	},
};
</script>

<style>
</style>