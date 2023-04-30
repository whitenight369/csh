<template>
	<div>
		<PartyBanner />
		<PartyDetails />
	</div>
</template>
<script>
import PartyBanner from "./banner.vue";
import PartyDetails from "./details.vue";

export default {
	name: "IndexPage",
	components: { PartyBanner, PartyDetails },
};
</script>
