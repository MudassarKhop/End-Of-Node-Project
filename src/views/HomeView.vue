<template>
	<section id="landing">
		<div class="contact">
			<div class="start">
				<p class="number"><i class="fa-solid fa-phone"></i> 5555-444-333</p>
				<p class="times"><i class="fa-solid fa-clock"></i> 8AM-10PM</p>
			</div>
			<div class="end">
				<p class="user"><i class="fa-solid fa-user"></i> My Account</p>
				<p class="cart"><i class="fa-solid fa-cart-arrow-down"></i> Cart</p>
			</div>
		</div>
		<nav>
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">Products</router-link>
			<router-link to="/about">Contact</router-link>
		</nav>
		<div class="father">
			<div class="div1">
				<h1>ROYAL JEWELLERS</h1>
				<h3>luxury time keepers</h3>
				<h5>authorized Rolex | Patek Philippe | Audemar Piguet retailer</h5>
				<div class="icons">
					<p>
						<a href="#" target="_blank"
							><i class="fa-brands fa-facebook"></i
						></a>
					</p>
					<p>
						<a href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a>
					</p>
					<p>
						<a href="#" target="_blank"
							><i class="fa-brands fa-whatsapp"></i
						></a>
					</p>
					<p>
						<a href="#" target="_blank"
							><i class="fa-brands fa-instagram"></i
						></a>
					</p>
				</div>
			</div>
			<div class="div2">
				<img class="ap" src="https://i.postimg.cc/NMY4t04Y/pngegg.png" alt="" />
				<img
					class="pp"
					src="https://i.postimg.cc/KvsJTxZr/pngegg-1.png"
					alt=""
				/>
				<img
					class="ro"
					src="https://i.postimg.cc/Sx2V73R0/pngegg-2.png"
					alt=""
				/>
			</div>
		</div>
	</section>
</template>

<script></script>
<style scoped>
	/* header */
	.contact {
		height: 3vh;
		background-color: transparent;
		padding: 10px;
		display: flex;
		flex-direction: row;
	}
	.number {
		padding-left: 35px;
		margin: auto;
		/* margin-left: 52px; */
		color: white;
		font-size: 17px;
	}
	.times {
		padding-left: 25px;
		margin: auto;
		/* margin-left: 52px; */
		color: white;
		font-size: 17px;
	}

	.start {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: start;
		align-items: flex-start;
	}
	.end {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: end;
		align-items: flex-end;
	}
	.user {
		margin: auto;
		margin-left: 1010px;
		color: white;
		font-size: 17px;
	}
	.cart {
		margin: auto;
		margin-left: 25px;
		color: white;
		font-size: 17px;
	}
	nav {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding: 10px;
		background-color: #34314bff;
	}

	nav a {
		font-weight: bold;
		padding: 10px;
		color: #2c3e50;
	}

	nav a.router-link-exact-active {
		color: #42b983;
	}
	/* header */
	#landing {
		height: 100vh;
		background-color: black;
		background-size: cover;
	}
	.father {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}
	.div1 {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 50%;
		height: 70vh;
	}
	.div2 {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 50%;
		height: 40vh;
	}
	h1 {
		font-size: 70px;
		color: white;
	}
	h3 {
		font-size: 50px;
		color: white;
	}
	h5 {
		color: white;
	}
	.ap {
		position: relative;
		height: 400px;
		margin-left: 10%;
	}
	.pp {
		position: relative;
		height: 360px;
		margin-right: 13%;
	}
	.ro {
		position: absolute;
		margin-top: 1%;
		height: 480px;
	}
	.icons {
		margin-top: 2%;
		display: flex;
		flex-direction: row;
	}
	.fa-instagram {
		font-size: 28px;
		display: inline-block;
		background: #212431;
		color: #fff;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		border-radius: 50%;
		text-align: center;
		width: 45px;
		transition: 0.3s;
	}
	.fa-whatsapp {
		font-size: 28px;
		display: inline-block;
		background: #212431;
		color: #fff;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		border-radius: 50%;
		text-align: center;
		width: 45px;
		transition: 0.3s;
	}
	.fa-twitter {
		font-size: 28px;
		display: inline-block;
		background: #212431;
		color: #fff;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		border-radius: 50%;
		text-align: center;
		width: 45px;
		transition: 0.3s;
	}
	.fa-facebook {
		font-size: 28px;
		display: inline-block;
		background: #212431;
		color: #fff;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		border-radius: 50%;
		text-align: center;
		width: 45px;
	}
	.fa-facebook:hover {
		background-color: white;
		color: #4867aa;
		transition: 1s;
	}
	.fa-twitter:hover {
		background-color: white;
		color: #1da1f2;
		transition: 1s;
	}
	.fa-whatsapp:hover {
		background-color: #28d347;
		color: white;
		transition: 1s;
	}
	.fa-instagram:hover {
		background: radial-gradient(
			circle at 33% 100%,
			#fed373 4%,
			#f15245 30%,
			#d92e7f 62%,
			#9b36b7 85%,
			#515ecf
		);
		color: white;
		transition: 1s;
	}
</style>
