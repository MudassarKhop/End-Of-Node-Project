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
				</div>
			</div>
			<div class="div2">
				<img
					class="ap"
					src="https://i.postimg.cc/Sx2V73R0/pngegg-2.png"
					alt=""
				/>
				<img class="pp" src="https://i.postimg.cc/Gm6yWgqw/pngegg.png" alt="" />
				<img class="ro" src="https://i.postimg.cc/NMY4t04Y/pngegg.png" alt="" />
			</div>
		</div>
	</section>
	<section id="footer">
		<div class="footer1"></div>
		<div class="footer2"></div>
		<div class="footer3">
			<p>all-rights-reserved/ Mudassar | Mika</p>
		</div>
	</section>
</template>

<script></script>
<style scoped>
	@font-face {
		font-family: Maron;
		src: url();
	}
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
		background-color: #142842;
	}

	nav a {
		font-weight: bold;
		font-size: 20px;
		padding: 15px;
		color: white;
		text-decoration: none;
	}

	nav a.router-link-exact-active {
		color: #b1b942;
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
		height: 360px;
		margin-left: 11%;
	}
	.pp {
		position: relative;
		height: 360px;
		margin-right: 13%;
	}
	.ro {
		position: absolute;
		margin-top: -3px;
		height: 520px;
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
	.fa-phone {
		color: #b1b942;
	}
	.fa-clock {
		color: #b1b942;
	}
	.fa-user {
		color: #b1b942;
	}
	.fa-cart-arrow-down {
		color: #b1b942;
	}
	/* footer */
	.footer1 {
		height: 20vh;
		background-color: #142842;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}
	.footer2 {
		height: 50vh;
		background-color: #192434;
	}
	.footer3 {
		height: 8vh;
		background-color: #0b2444;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.footer3 p {
		color: white;
	}
</style>
