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
			<div class="mb-3 d-flex justify-content-start align-items-center">
				<input
					id="chooseAll"
					:checked="checked"
					type="checkbox"
					class="me-3"
					@input="chooseAllSkills"
				/>
				<label
					for="chooseAll"
					class="flex flex-row items-center font-bold cursor-pointer"
				>
					Select all forms</label
				>
			</div>
			<CheckBox
				v-for="file in files"
				:id="file.id"
				:key="file.id"
				:label="file.label"
			/>
			<!-- 	v-model="file" -->
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
import CheckBox from "../components/CheckBox.vue";

export default {
	name: "CardLeft",
	components: {
		AppInput,
		AppButtons,
		AppSeparator,
		CheckBox,
	},
	data() {
		return {
			files: [],
			checked: false,
		};
	},
	async created() {
		await this.GetForms();
	},
	methods: {
		async GetForms() {
			try {
				const response = await fetch(
					"/api/template-storage/forms?clients=0004",
					{
						method: "GET",
						headers: {
							authorization:
								"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiYXJhbm92QGdhbGFjdGljYWxhYnMuY29tIiwiZmlyc3ROYW1lIjoiRHJldyIsImxhc3ROYW1lIjoiQmFyYW5vdiIsInBlcm1pc3Npb25zIjpbInBvcnRmb2xpbyIsInVzZXJzIiwib3JnYW5pemF0aW9ucyIsInNwZWNpZmljYXRpb25zIiwiZm9ybXMiLCJ0ZW1wbGF0ZXMiLCJhcHBsaWNhdGlvbnMiLCJ1c3B0byIsIm1lc3NhZ2VzIiwid29ya2Zsb3dzIiwiYWRtaW5pc3RyYXRpb24iLCJkb2NrZXRpbmdfdGFza3MiLCJhZG1pbmlzdHJhdGlvbl90YXNrcyJdLCJ0ZWFtcyI6WyJDbGllbnQiLCIyQVIiLCJzbGlsbGVtbyBhc3Npc3RhbnRzIl0sImlhdCI6MTY2NjI3MzkyMSwiZXhwIjoxNjY4ODY1OTIxLCJzdWIiOiI2MTliYzNkYWYzYTdlNDY1MjBiNDNlNzYifQ.dNnaoHpdE221dpGWf_72B971IuYturmAonq4o7NJUHY",
						},
					}
				);
				this.files = await response.json();
				debugger;
			} catch (e) {
				console.log(e);
			}
		},
	},
};
</script>

<style>
</style>