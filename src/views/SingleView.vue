<template>
	<SingleCard
		v-for="product in products"
		:key="product.id"
		:product="product"
	/>
</template>
<script>
	import SingleCard from "@/components/SingleCard.vue";
	export default { component: { SingleCard } };
</script>
<style></style>
