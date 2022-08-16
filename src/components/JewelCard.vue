<template>
	<div id="card3">
		<div id="pic">
			<img id="cimg3" height="200" width="200" :src="product.url" alt="" />
		</div>
		<router-link :to="{name: 'SingleView', params: {id:product.product_id} }">
			<div id="name">
				<h1>{{ product.name }}</h1>
				<h4>{{ product.brand }}</h4>
			</div>
		</router-link>
		<div id="price">
			<h3>${{ product.price }}</h3>
		</div>
		<!-- Button trigger modal -->
		<button
			type="button"
			class="btn btn-primary"
			data-bs-toggle="modal"
			data-bs-target="#staticBackdrop"
		>
			Quick view
		</button>

		<!-- Modal -->
		<div
			class="modal fade"
			id="staticBackdrop"
			data-bs-backdrop="static"
			data-bs-keyboard="false"
			tabindex="-1"
			aria-labelledby="staticBackdropLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog modal-lg modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="staticBackdropLabel"></h5>

						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close-light"
						></button>
					</div>
					<div class="modal-body">
						<div id="gm">
							<div id="twin1">
								<img
									id="cimg3"
									height="200"
									width="200"
									:src="product.url"
									alt=""
								/>
							</div>
							<div id="twin2">
								<h1>{{ product.name }}</h1>
								<p>
									{{ product.description }}
								</p>
								<div class="d-flex">
									<a class="btn text-light">Add To Cart</a>
									<router-link to="/singleview" target="_blank"
										><a class="btn text-light">View More</a></router-link
									>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		 props: ["product"],
		 };
</script>
<style scoped>
	#card3 {
		height: 350px;
		width: 250px;
		background-color: #183c38;
		border: 1px solid #b1b942;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		box-shadow: 3px 3px 40px #10100f, -3px -3px 40px #2c2c2b;
		/* box-shadow: 27px 27px 54px #080807, -27px -27px 54px #1e1e1d; */
		transition: 2s;
	}
	#pic {
		height: 200px;
		width: 248px;
		background-color: #1e1e1d;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		padding-right: 5px;
	}
	#card3:hover {
		box-shadow: 5px 5px 10px #b1b942, -5px -5px 10px #858b37;
		transition: 1s;
		border: none;
	}
	/* #cimg3 {
		transform: rotate(90deg);
	} */
	#name {
		text-align: center;
		padding: 10px;
	}
	a {
		text-decoration: none;
	}
	#name h1 {
		font-size: 25px;
		color: white;
		font-family: "Cormorant SC", serif;
		transition: 0.6s;
	}
	#price {
		text-align: center;
	}
	#price h3 {
		font-size: 26px;
		color: #b1b942;
		font-family: "Aboreto", cursive;
	}
	.btn {
		display: none;
		background-color: #040f0f;
		border: 1px solid #b1b942;
		font-family: Maron;
		margin-left: 10px;
		transition: 1s ease-in;
	}
	.d-flex {
		justify-content: center;
	}
	.btn:hover {
		background-color: #183c38;
		transition: 2s;
	}

	.modal-header {
		background-color: #183c38;
		color: white;
		border: 1px solid #b1b942;
	}
	.modal-body {
		background-color: #1e1e1d;
		color: white;
		border: 1px solid #b1b942;
		text-align: center;
	}
	.modal-footer {
		background-color: #183c38;
		color: white;
		border: 1px solid #b1b942;
		height: 70px;
	}
	#card3:hover .btn {
		display: block;
		transition: 1s;
	}
	#card3:hover #name {
		text-decoration: underline 2px #b1b942;
		transition: 0.6s;
	}
	#gm {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
	}
	#twin2 {
		width: 40%;
		padding: 20px;
	}
	#twin1 {
		width: 40%;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
	}
	#img2 {
		width: 400px;
		height: 400px;
	}
</style>
