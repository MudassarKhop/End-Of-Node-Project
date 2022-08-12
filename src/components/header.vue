<template>
	<div class="footer1">
		<!-- <img
			height="165px"
			width="265px"
			src="https://i.postimg.cc/sgCRKW7V/pngwing-com-11.png"
			alt=""
		/>
		<img
			height="180px"
			width="280px"
			src="https://i.postimg.cc/vHhDf2wr/audemars-piguet-logo-black-and-white.png"
			alt=""
		/>
		<img
			height="40px"
			width="170px"
			src="https://i.postimg.cc/Hk4mmTfg/5a1c3caaf65d84088faf142f.png"
			alt=""
		/>
		<img
			height="150px"
			width="200px"
			src="https://i.postimg.cc/KjcL0p7S/pngwing-com-6.png"
			alt=""
		/>
		<img
			height="50px"
			width="200px"
			src="https://i.postimg.cc/3NVhFG9H/Jaeger-Le-Coultre-logo-logotype.png"
			alt=""
		/>
		<img
			height="130px"
			width="200px"
			src="https://i.postimg.cc/59spNWnL/pngwing-com-3.png"
			alt=""
		/>
		<img
			height="100px"
			width="200px"
			src="https://i.postimg.cc/pLSzg2VX/pngwing-com-10.png"
			alt=""
		/>
		<img
			height="100px"
			width="125px"
			src="https://i.postimg.cc/cJNC4jjQ/tag-heuer-logo.png"
			alt=""
		/> -->
	</div>
	<div class="footer2">
		<div id="foot">
			<h1><span>Our Stores</span></h1>
			<div>
				<ul>
					<li><i class="fa-solid fa-chevron-right"></i> London</li>
					<li><i class="fa-solid fa-chevron-right"></i> Paris</li>
					<li><i class="fa-solid fa-chevron-right"></i> Milan</li>
				</ul>
			</div>
			<div>
				<ul>
					<li><i class="fa-solid fa-chevron-right"></i> Monaco</li>
					<li><i class="fa-solid fa-chevron-right"></i> Barcelona</li>
					<li><i class="fa-solid fa-chevron-right"></i> Geneva</li>
				</ul>
			</div>
		</div>
		<div id="foot2">
			<h1><span>Socials</span></h1>
			<div id="icons">
				<p>
					<a href="#" target="_blank"><i class="fa-brands fa-facebook"></i></a>
				</p>
				<p>
					<a href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a>
				</p>
				<p>
					<a href="#" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
				</p>
			</div>
			<div id="icons">
				<p>
					<a href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a>
				</p>
				<p>
					<a href="#" target="_blank"><i class="fa-brands fa-google"></i></a>
				</p>
				<p>
					<a href="#" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
				</p>
			</div>
		</div>
		<div id="foot3">
			<h1><span>Sign Up</span></h1>
			<p>Become a luxury member with exclusive benefits.</p>
			<router-link to="/register"
				><button class="btn">Register</button></router-link
			>
		</div>
	</div>
	<div class="footer3">
		<p>all-rights-reserved/ Mudassar | Mika</p>
	</div>
</template>
<script>
	export default {};
</script>
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

	h1 {
		position: absolute;
		margin-top: -12%;
		font-family: Maron;
		font-size: 70px;
		color: white;
		margin-bottom: none;
		text-shadow: 3px 3px black;
	}

	span {
		color: #b1b942;
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
	/* footer medium */
	.footer1 {
		height: 4vh;
		background-color: #183c38;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		padding: 10px;
		border-top: 1px solid #b1b942;
		border-right: 1px solid #b1b942;
		border-left: 1px solid #b1b942;
	}
	.footer1 div {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.watch {
		margin-right: 50px;
	}
	/* footer big */
	.footer2 {
		min-height: 40vh;
		background-color: #040f0f;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding-top: 60px;
		gap: 30px;
		border-right: 1px solid #b1b942;
		border-left: 1px solid #b1b942;
	}
	#foot {
		width: 30%;
		height: 80%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		color: white;
		gap: 10px;
	}
	#foot li {
		font-size: 18px;
		line-height: 30px;
		font-family: "Cinzel Decorative", cursive;
		letter-spacing: 2px;
		list-style: none;
	}
	#foot2 div {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}
	#foot2 {
		width: 30%;
		height: 80%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		color: white;
		gap: 10px;
	}
	#icons p {
		gap: 30px;
	}
	#foot3 p {
		font-size: 18px;
		line-height: 30px;
		letter-spacing: 2px;
		font-family: "Cinzel Decorative", cursive;
		text-align: center;
	}

	#foot3 {
		width: 30%;
		height: 80%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		color: white;
	}
	#foot3 button {
		margin-top: 3px;
		background-color: #183c38;
		color: white;
		padding: 5px;
		border: 1px solid #b1b942;
		width: 90px;
	}
	/* footer small */
	.footer3 {
		height: 8vh;
		background-color: #183c38;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		border-right: 1px solid #b1b942;
		border-left: 1px solid #b1b942;
		border-bottom: 2px solid #b1b942;
	}
	.footer3 p {
		color: white;
		font-family: "Cinzel Decorative", cursive;
	}
	/* footer big headings */
	#foot h1 {
		margin-bottom: 30px;
	}
	#foot2 h1 {
		margin-bottom: 20px;
	}
	#foot3 h1 {
		margin-bottom: 10px;
	}

	/*  */
</style>
