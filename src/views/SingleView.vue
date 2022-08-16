
<template>
<div v-if="product">
	<div id="pdiv">
		<div class="daughter1">
			<div
				id="carouselExampleIndicators"
				class="carousel slide"
				data-bs-ride="true"
			>
				<div class="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="0"
						class="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img
							src="https://i.postimg.cc/TYfXhjGk/Seek-Png-com-rolex-watch-png-7924376.png"
							class="d-block"
							alt="..."
						/>
					</div>
					<div class="carousel-item">
						<img
							src="https://i.postimg.cc/BbrvrXR8/Seek-Png-com-duck-dynasty-beard-png-5772739.png"
							class="d-block"
							alt="..."
						/>
					</div>
					<div class="carousel-item">
						<img
							id="cimg3"
							height="200"
							width="200"
							:src="product.url"
							alt=""
						/>
					</div>
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
		<div class="daughter2">
			<h1>{{ product.name }}</h1>
			<p>
				{{ product.description }}
			</p>
			<h3>${{ product.price }}</h3>
			<div class="d-flex">
				<button class="btn text-light border border-light">Add To Cart</button>
				<button class="btn text-light border border-light">Check Out</button>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	// import SingleCard from "@/components/SingleCard.vue";
	export default { 
	props: ["product_id"],
	mounted() {
			this.$store.dispatch("getSingleProduct", this.product_id);
			// fetch("https://joint-ecom.herokuapp.com/products")
			//   .then((res) => res.json())
			//   .then((data) => (this.products = data));
		},
		computed: {
			product() {
				return this.$store.state.product;
				//Returning the current state of the store
				//Must have when looping through properties
			},
		},
		};
</script>
<style scoped>
#product {
		height: 85vh;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 20px;
	}
	#pdiv {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.daughter1 {
		height: 90%;
		width: 60%;
		border: 1px solid #b1b942;
		background-color: #183c38;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.daughter2 {
		height: 90%;
		width: 30%;
		border: 1px solid #b1b942;
		background-color: #183c38;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.daughter2 h3 {
		color: #b1b942;
		font-family: "Aboreto", cursive;
	}
	.daughter2 h1 {
		color: white;
		font-family: Maron;
	}
	.daughter2 p {
		padding: 10px;
		color: white;
		font-family: "Cormorant SC", serif;
		font-size: 18px;
	}
	.daughter2 div .btn {
		margin-top: 10px;
	}
	.daughter2 div .btn {
		margin-left: 10px;
	}
	.carousel {
		height: 100%;
		width: 100%;
	}

	.carousel-inner img {
		height: 30%;
		width: 30%;
	}
	.carousel-inner {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	/* #product {
		height: 85vh;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 20px;
	} */


	/* <template>
	<section id="product">
		<SingleCard
			v-for="product in products"
			:key="product.id"
			:product="product"
		/>
	</section>
</template> */
</style>
