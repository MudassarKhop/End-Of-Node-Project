<template>
	<section id="product">
		<SingleCard
			v-for="product in products"
			:key="product.id"
			:product="product"
		/>
	</section>
</template>
<script>
	import SingleCard from "@/components/SingleCard.vue";
	export default { component: { SingleCard } };
</script>
<style scoped>
	#product {
		height: 85vh;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 20px;
	}
</style>
