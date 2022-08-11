<template>
	<section>
		<Footer />
	</section>
	<Header />
</template>
<script>
	import Footer from "../components/footer.vue";
	import Header from "@/components/header.vue";
	export default {
		components: { Footer, Header },
	};
</script>
<style scoped>
	section {
		min-height: 100vh;
		background-color: black;
	}
</style>
