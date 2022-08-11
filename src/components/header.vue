<template>
	<div class="footer1">
		<img
			class="watch"
			height="100px"
			width="200px"
			src="https://i.postimg.cc/mrr3QpV0/rolex-png-logo-3491.png"
			alt=""
		/>
		<img
			class="watch"
			height="115px"
			width="115px"
			src="https://i.postimg.cc/sfnJQ93B/patek-philippe-logo.png"
			alt=""
		/>
		<img
			class="watch"
			height="100px"
			width="300px"
			src="https://i.postimg.cc/zvsCZdp2/Audemars-Piguet-logo-logotype.png"
			alt=""
		/>
		<img
			class="watch"
			height="100px"
			width="300px"
			src="https://i.postimg.cc/3NVhFG9H/Jaeger-Le-Coultre-logo-logotype.png"
			alt=""
		/>
		<img
			height="100px"
			width="250px"
			src="https://i.postimg.cc/MG7rsBZ8/pngkey-com-chanel-logo-png-5053301.png"
			alt=""
		/>
		<img
			class="watch"
			height="200px"
			width="225px"
			src="https://i.postimg.cc/cJNC4jjQ/tag-heuer-logo.png"
			alt=""
		/>
	</div>
	<div class="footer2">
		<div id="foot">
			<h1><span>Our Stores</span></h1>
			<ul>
				<li><i class="fa-solid fa-chevron-right"></i> Cape Town</li>
				<li><i class="fa-solid fa-chevron-right"></i> Paris</li>
				<li><i class="fa-solid fa-chevron-right"></i> Milan</li>
				<li><i class="fa-solid fa-chevron-right"></i> Monaco</li>
				<li><i class="fa-solid fa-chevron-right"></i> Barcelona</li>
			</ul>
		</div>
		<div id="foot2">
			<h1><span>Socials</span></h1>
			<div>
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
			<div>
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

			<ul>
				<li>Become a luxury member with exclusive benefits.</li>
			</ul>
			<form>
				<div class="group">
					<input type="text" required />
					<span class="highlight"></span>
					<span class="bar"></span>
					<label>Email</label>
				</div>

				<div class="group">
					<input type="text" required />
					<span class="highlight"></span>
					<span class="bar"></span>
					<label>Password</label>
				</div>
				<button class="btn">Sign Up</button>
			</form>
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
	.fa-whatsapp {
		font-size: 28px;
		display: inline-block;
		background: #142842;
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
		background: #142842;
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
		background: #142842;
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
		background: #142842;
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
		background: #142842;
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
		background: #142842;
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
	/* footer */
	.footer1 {
		height: 18vh;
		background-color: #142842;
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
		background-color: #142842;
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
	.footer3 p {
		color: white;
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
