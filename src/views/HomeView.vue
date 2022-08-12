<template>
	<section id="landing">
		<div class="father">
			<div class="div1">
				<h1>Royale <span>JEWELLERS</span></h1>
				<h2>Luxury Time Keepers</h2>
				<h5>authorized retailer since 1990</h5>
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
	<section id="about" class="about">
		<div class="headingabout">
			<h1>About <span>Us</span></h1>
		</div>
		<div class="mother">
			<div class="son1"></div>
			<div class="son2"></div>
		</div>
	</section>
</template>

<script></script>
<style scoped>
	* {
		margin: 0%;
		padding: 0%;
	}
	@font-face {
		font-family: Maron;
		src: url(../ErvaEsraDemoSemibold-Rpwle.ttf);
	}
	@import url("https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300&display=swap");
	/* header */
	#things {
		margin-bottom: 20px;
	}
	/* header */
	#landing {
		height: 82vh;
		background-color: #131312;
		background-size: cover;
	}
	.father {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding: 20px;
		margin-top: 2%;
	}
	.div1 {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 45%;
		height: 70vh;
	}
	.div2 {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 45%;
		height: 40vh;
	}
	h1 {
		position: absolute;
		margin-top: -14%;
		font-family: "Aboreto", cursive;
		font-size: 70px;
		color: white;
		margin-bottom: none;
	}
	h2 {
		font-family: "Cinzel Decorative", cursive;
		margin-top: none;
		letter-spacing: 5px;
		font-size: 30px;
		color: white;
	}
	h5 {
		font-family: "Cinzel Decorative", cursive;
		margin-top: 2%;
		font-size: 15px;
		color: white;
	}
	span {
		font-family: Maron;
		color: #b1b942;
		text-shadow: 4px 3px black;
	}
	.ap {
		position: relative;
		height: 360px;
		margin-left: 8%;
		filter: drop-shadow(0px 10px 3px rgb(176, 176, 176));
	}
	.pp {
		position: relative;
		height: 360px;
		margin-top: 2%;
		margin-right: 13%;
		filter: drop-shadow(0px 10px 3px rgb(176, 176, 176));
	}
	.ro {
		position: absolute;
		margin-top: -3px;
		height: 520px;
		filter: drop-shadow(0px 10px 3px #90784c);
	}
	.icons {
		margin-top: 2%;
		display: flex;
		flex-direction: row;
	}
	.fa-whatsapp {
		font-size: 28px;
		display: inline-block;
		background: #183c38;
		color: white;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		border-radius: 50%;
		text-align: center;
		width: 45px;
		transition: 0.3s;
	}
	.fa-linkedin {
		font-size: 28px;
		display: inline-block;
		background: #183c38;
		color: white;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		border-radius: 50%;
		text-align: center;
		width: 45px;
		transition: 0.3s;
	}
	.fa-google {
		font-size: 28px;
		display: inline-block;
		background: #183c38;
		color: white;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		border-radius: 50%;
		text-align: center;
		width: 45px;
		transition: 0.3s;
	}
	.fa-instagram {
		font-size: 28px;
		display: inline-block;
		background: #183c38;
		color: white;
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
		background: #183c38;
		color: white;
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
		background: #183c38;
		color: white;
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
	.fa-google:hover {
		background-color: red;
		color: white;
		transition: 1s;
	}
	.fa-linkedin:hover {
		color: #0077b5;
		background-color: white;
		transition: 1s;
	}
	.fa-instagram:hover {
		background: purple;
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
	.fa-chevron-right {
		color: #b1b942;
	}
	/* about */
	.about {
		height: 100vh;
		background-color: black;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.headingabout {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
</style>
