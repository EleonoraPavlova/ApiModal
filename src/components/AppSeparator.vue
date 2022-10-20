<template>
	<div class="vertical-panel d-flex justify-content-center align-items-center">
		<h6 class="mb-0 me-3">All Forms</h6>
		<button type="button" class="btn btn-light rounded-circle">
			<i class="chevron-left" />
		</button>
	</div>
</template>

<script>
export default {
	name: "AppSeparator",
};
</script>

<style>
.vertical-panel {
	transform: translate(270px) rotate(-90deg);
}
</style>