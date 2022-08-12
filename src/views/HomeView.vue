<template>
	<section id="landing">
		<div id="things">
			<div class="contact">
				<div class="start">
					<p class="number"><i class="fa-solid fa-phone"></i> 5555-444-333</p>
					<p class="times"><i class="fa-solid fa-clock"></i> 8AM-10PM</p>
				</div>
				<div class="end">
					<p class="user">
						<router-link to="/login"
							><i class="fa-solid fa-user"></i
						></router-link>
						Log In
					</p>
					<p class="cart"><i class="fa-solid fa-cart-arrow-down"></i> Cart</p>
				</div>
			</div>
		</div>
		<div class="nav">
			<router-link to="/">Home</router-link>
			<a href="/#about">About</a>
			<router-link to="/products">Products</router-link>
			<router-link to="/contact">Contact</router-link>
			<router-link to="/register">Register</router-link>
		</div>
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
	<section id="footer">
		<div class="footer1">
			<img
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
			/>
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
				<div>
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
				<div>
					<p>
						<a href="#" target="_blank"
							><i class="fa-brands fa-instagram"></i
						></a>
					</p>
					<p>
						<a href="#" target="_blank"><i class="fa-brands fa-google"></i></a>
					</p>
					<p>
						<a href="#" target="_blank"
							><i class="fa-brands fa-linkedin"></i
						></a>
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
		font-family: "Cinzel Decorative", cursive;
	}
	.times {
		padding-left: 25px;
		margin: auto;
		color: white;
		font-size: 17px;
		font-family: "Cinzel Decorative", cursive;
		letter-spacing: 1px;
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
		margin-left: 975px;
		color: white;
		font-size: 17px;
		font-family: "Cinzel Decorative", cursive;
		letter-spacing: 1px;
	}
	.cart {
		margin: auto;
		margin-left: 25px;
		color: white;
		font-size: 17px;
		font-family: "Cinzel Decorative", cursive;
		letter-spacing: 1px;
	}
	.nav {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding: 10px;
		background-color: #183c38;
	}

	.nav a {
		font-weight: bold;
		font-size: 20px;
		padding: 8px;
		color: white;
		text-decoration: none;
		text-shadow: 2px 2px black;
		letter-spacing: 2px;
		font-family: "Cinzel Decorative", cursive;
	}

	.nav a.router-link-exact-active {
		color: #b1b942;
	}
	/* header */
	#landing {
		height: 100vh;
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
	/* footer */
	/* footer medium */
	.footer1 {
		height: 10vh;
		background-color: #183c38;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		padding: 10px;
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
	/*  */
</style>
