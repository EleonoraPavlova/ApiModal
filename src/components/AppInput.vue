<template>
	<input
		type="text"
		class="m-2"
		:class="size"
		:value="modelValue"
		@input="updateInput"
	/>
</template>



<script>
export default {
	name: "AppInput",
	props: {
		modelValue: {
			type: String,
			default: "",
		},
		size: {
			type: String,
			default: "form-control-sm",
		},
	},
	emits: ["update:modelValue"],
	methods: {
		updateInput(event) {
			this.$emit("update:modelValue", event.target.value);
		},
	},
};
</script>
