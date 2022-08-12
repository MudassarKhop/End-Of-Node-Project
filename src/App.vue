<template>
	<Footer />
	<router-view />
	<Header />
</template>

<script>
	import Header from "./components/header.vue";
	import Footer from "./components/footer.vue";
	export default {
		components: { Header, Footer },
	};
</script>

<style>
	* {
		margin: 0%;
		padding: 0%;
	}
	body {
		background-color: #131312;
	}
</style>
