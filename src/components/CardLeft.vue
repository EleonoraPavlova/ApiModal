<template>
	<div class="d-flex justify-content-between align-items-start">
		<div class="d-flex align-items-start flex-column mb-3">
			<div class="mb-2 height">
				<div class="d-flex align-items-center mb-2">
					<p class="mb-0">Matter number:</p>
					<AppInput />
				</div>
				<div class="d-flex justify-content-srart">
					<p class="">HARRITY &amp; HARRITY, LLP</p>
				</div>

				<div class="mb-3 d-flex justify-content-start align-items-center">
					<input
						id="chooseAll"
						:checked="checked"
						type="checkbox"
						class="me-2"
						@input="chooseAll"
					/>
					<label
						for="chooseAll"
						class="flex flex-row items-center font-bold cursor-pointer"
					>
						Select all forms</label
					>
				</div>
				<div
					v-for="file in files"
					:key="file"
					class="d-flex align-items-center mb-2"
				>
					<div v-if="file.type === 'docx'">
						<AppImage name="file-word" color="cyan" class="me-2" />
					</div>
					<div v-else>
						<AppImage class="me-2" />
					</div>
					<CheckBox
						:name="file.name"
						:id="file.id"
						v-model="file.isSelected"
					></CheckBox>
				</div>
			</div>
			<div class="p-2">
				<CheckBox name="Skip cache" id="skip" v-model="skipCache" />
			</div>
		</div>
		<div class="d-flex flex-column align-items-center mb-3">
			<AppSeparator class="stretch-height" @click="$emit('show')" />
			<AppButtons class="bg-transparent btn-outline-info" size="md"
				>Generate</AppButtons
			>
		</div>
	</div>
</template>

<script>
import AppInput from "../components/AppInput.vue";
import AppButtons from "../components/AppButtons.vue";
import CheckBox from "../components/CheckBox.vue";
import AppImage from "../components/AppImage.vue";
import AppSeparator from "../components/AppSeparator.vue";
import axios from "axios";

export default {
	name: "CardLeft",
	components: {
		AppInput,
		AppButtons,
		CheckBox,
		AppImage,
		AppSeparator,
	},
	data() {
		return {
			files: [],
			type: "",
			isSelected: false,
			checked: false,
			skipCache: false,
		};
	},
	emits: ["show"],
	async created() {
		await this.GetForms();
	},
	methods: {
		async GetForms() {
			axios
				.get("/api/template-storage/forms?clients=0004", {
					headers: {
						authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiYXJhbm92QGdhbGFjdGljYWxhYnMuY29tIiwiZmlyc3ROYW1lIjoiRHJldyIsImxhc3ROYW1lIjoiQmFyYW5vdiIsInBlcm1pc3Npb25zIjpbInBvcnRmb2xpbyIsInVzZXJzIiwib3JnYW5pemF0aW9ucyIsInNwZWNpZmljYXRpb25zIiwiZm9ybXMiLCJ0ZW1wbGF0ZXMiLCJhcHBsaWNhdGlvbnMiLCJ1c3B0byIsIm1lc3NhZ2VzIiwid29ya2Zsb3dzIiwiYWRtaW5pc3RyYXRpb24iLCJkb2NrZXRpbmdfdGFza3MiLCJhZG1pbmlzdHJhdGlvbl90YXNrcyJdLCJ0ZWFtcyI6WyJDbGllbnQiLCIyQVIiLCJzbGlsbGVtbyBhc3Npc3RhbnRzIl0sImlhdCI6MTY2NjI3MzkyMSwiZXhwIjoxNjY4ODY1OTIxLCJzdWIiOiI2MTliYzNkYWYzYTdlNDY1MjBiNDNlNzYifQ.dNnaoHpdE221dpGWf_72B971IuYturmAonq4o7NJUHY",
					},
				})
				.then((response) => {
					this.files = response.data.data;
					console.log(this.files);
					if (this.type === "docx") {
						return "docx";
					} else {
						return "pdf";
					}
				})
				.catch((e) => {
					throw new Error(e);
				});
		},
		chooseAll() {
			this.checked = !this.checked;
			this.files.forEach((item) => (item.isSelected = this.checked));
		},
	},
};
</script>

<style lang="scss">
.height {
	height: 450px;
}
.stretch-height {
	height: 414px;
}
</style>