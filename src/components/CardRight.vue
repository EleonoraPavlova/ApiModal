<template>
	<div>
		<div
			v-for="list in lists"
			:key="list"
			class="d-flex justify-content-start align-items-center"
		>
			<AppSvg />
			<div class="d-flex justify-content-start align-items-center">
				<div
					v-if="list.type === 'docx'"
					class="d-flex justify-content-center align-items-center"
				>
					<AppImage name="file-word" class="mx-2" color="cyan" />
				</div>
				<div v-else>
					<AppImage class="mx-2" />
				</div>

				<div class="div">
					<p class="mb-0">{{ list.name }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AppSvg from "../components/AppSvg.vue";
import AppImage from "../components/AppImage.vue";
import axios from "axios";

export default {
	name: "CardRight",
	components: {
		AppSvg,
		AppImage,
	},
	data() {
		return {
			lists: [],
			type: "",
		};
	},
	async created() {
		await this.GetAllForms();
	},
	methods: {
		async GetAllForms() {
			axios
				.get("api/template-storage/forms?clients=all", {
					headers: {
						authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiYXJhbm92QGdhbGFjdGljYWxhYnMuY29tIiwiZmlyc3ROYW1lIjoiRHJldyIsImxhc3ROYW1lIjoiQmFyYW5vdiIsInBlcm1pc3Npb25zIjpbInBvcnRmb2xpbyIsInVzZXJzIiwib3JnYW5pemF0aW9ucyIsInNwZWNpZmljYXRpb25zIiwiZm9ybXMiLCJ0ZW1wbGF0ZXMiLCJhcHBsaWNhdGlvbnMiLCJ1c3B0byIsIm1lc3NhZ2VzIiwid29ya2Zsb3dzIiwiYWRtaW5pc3RyYXRpb24iLCJkb2NrZXRpbmdfdGFza3MiLCJhZG1pbmlzdHJhdGlvbl90YXNrcyJdLCJ0ZWFtcyI6WyJDbGllbnQiLCIyQVIiLCJzbGlsbGVtbyBhc3Npc3RhbnRzIl0sImlhdCI6MTY2NjI3MzkyMSwiZXhwIjoxNjY4ODY1OTIxLCJzdWIiOiI2MTliYzNkYWYzYTdlNDY1MjBiNDNlNzYifQ.dNnaoHpdE221dpGWf_72B971IuYturmAonq4o7NJUHY",
					},
				})
				.then((response) => {
					this.lists = response.data.data;
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
	},
};
</script>
