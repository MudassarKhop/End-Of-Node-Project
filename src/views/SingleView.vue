<template>
	<section id="product">
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
								src="https://i.postimg.cc/FzMbfNCM/Seek-Png-com-black-desert-png-3455060.png"
								class="d-block"
								alt="..."
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
				<h1>TITLE</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
					harum temporibus velit quam. Dolorem unde, libero consectetur debitis
					quis cum fuga provident omnis mollitia! Atque pariatur autem
					perspiciatis tempora facere?
				</p>
				<h3>$$$</h3>
				<div class="d-flex">
					<button class="btn text-light border border-light">
						Add To Cart
					</button>
					<button class="btn text-light border border-light">Check Out</button>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	export default {};
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
</style>
