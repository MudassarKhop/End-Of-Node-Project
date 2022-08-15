<template>
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
		background-color: black;
	}
	.contact {
		height: 3vh;
		background-color: #131312;
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
		border-bottom: 1px solid #b1b942;
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
		margin-top: -12%;
		font-family: Maron;
		font-size: 70px;
		color: white;
		margin-bottom: none;
	}
	h2 {
		font-family: "Cormorant SC", serif;
		margin-top: none;
		letter-spacing: 5px;
		font-size: 50px;
		color: white;
	}
	h5 {
		font-family: "Cormorant SC", serif;
		color: white;
	}
	span {
		color: #b1b942;
	}
	.ap {
		position: relative;
		height: 360px;
		margin-left: 8%;
	}
	.pp {
		position: relative;
		height: 360px;
		margin-top: 2%;
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
		background-color: #131312;
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
	.mother {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.son1 {
		height: 80vh;
		width: 60%;
		background-color: red;
	}
	.son2 {
		height: 80vh;
		width: 30%;
		background-color: red;
	}
	/* footer */
	.footer1 {
		height: 18vh;
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
	.footer2 {
		min-height: 50vh;
		background-color: #192434;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 30px;
	}
	#foot {
		width: 30%;
		height: 80%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		color: white;
		font-family: "Cinzel Decorative", cursive;
	}
	#foot2 {
		width: 30%;
		height: 80%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		color: white;
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
	#foot3 li {
		margin-top: 10px;
	}
	#foot3 ul {
		margin-top: 50px;
	}

	#foot3 button {
		background-color: #183c38;
		color: white;
		padding: 5px;
	}
	li {
		font-size: 20px;
		list-style: none;
	}
	#foot h1 {
		margin-bottom: 50px;
	}
	#foot2 h1 {
		margin-bottom: 50px;
	}
	#foot3 h1 {
		margin-bottom: 50px;
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

	/*  */
	form {
		margin-top: 19px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.group {
		position: relative;
		margin-bottom: 23px;
	}
	input {
		font-size: 18px;
		padding: 10px 10px 10px 5px;
		display: block;
		width: 300px;
		background-color: transparent;
		border: none;
		border-bottom: 1px solid #757575;
		color: white;
	}
	input:focus {
		outline: none;
	}

	/* LABEL ======================================= */
	label {
		color: #999;
		font-size: 18px;
		font-weight: normal;
		position: absolute;
		pointer-events: none;
		left: 5px;
		top: 10px;
		transition: 0.2s ease all;
		-moz-transition: 0.2s ease all;
		-webkit-transition: 0.2s ease all;
	}

	/* active state */
	input:focus ~ label,
	input:valid ~ label {
		top: -20px;
		font-size: 14px;
		color: #b1b942;
	}

	/* BOTTOM BARS ================================= */
	.bar {
		position: relative;
		display: block;
		width: 300px;
	}
	.bar:before,
	.bar:after {
		content: "";
		height: 2px;
		width: 0;
		bottom: 1px;
		position: absolute;
		background: #b1b942;
		transition: 0.2s ease all;
		-moz-transition: 0.2s ease all;
		-webkit-transition: 0.2s ease all;
	}
	.bar:before {
		left: 50%;
	}
	.bar:after {
		right: 50%;
	}

	/* active state */
	input:focus ~ .bar:before,
	input:focus ~ .bar:after {
		width: 50%;
	}

	/* HIGHLIGHTER ================================== */
	.highlight {
		position: absolute;
		height: 60%;
		width: 100px;
		top: 25%;
		left: 0;
		pointer-events: none;
		opacity: 0.5;
	}

	/* active state */
	input:focus ~ .highlight {
		-webkit-animation: inputHighlighter 0.3s ease;
		-moz-animation: inputHighlighter 0.3s ease;
		animation: inputHighlighter 0.3s ease;
	}

	/* ANIMATIONS ================ */
	@-webkit-keyframes inputHighlighter {
		from {
			background: #5264ae;
		}
		to {
			width: 0;
			background: transparent;
		}
	}
	@-moz-keyframes inputHighlighter {
		from {
			background: #5264ae;
		}
		to {
			width: 0;
			background: transparent;
		}
	}
	@keyframes inputHighlighter {
		from {
			background: #5264ae;
		}
		to {
			width: 0;
			background: transparent;
		}
	}
	.watch {
		margin-right: 10px;
	}
	/*  */
</style>
