<template>
	<Footer />
	<section>
		<div class="register">
			<form>
				<h1>Register <span>Now</span></h1>
				<p>Join now to gain exclusive benefits.</p>
				<div class="group">
					<input type="text" required />
					<span class="highlight"></span>
					<span class="bar"></span>
					<label>Full Name</label>
				</div>

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
				<div class="group">
					<input type="text" required />
					<span class="highlight"></span>
					<span class="bar"></span>
					<label>Phone Number</label>
				</div>
				<div class="group">
					<input type="text" required />
					<span class="highlight"></span>
					<span class="bar"></span>
					<label>Shipping Address</label>
				</div>
				<button class="btn text-light">Sign Up</button>
			</form>
		</div>
	</section>
	<Header />
</template>
<script>
	import Footer from "@/components/footer.vue";
	import Header from "@/components/header.vue";
	export default {
		components: { Footer, Header },
	};
</script>
<style scoped>
	section {
		height: 87vh;
		background-color: #131312;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.register {
		min-height: 600px;
		width: 400px;
		background-color: #040f0f;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		border-radius: 5%;
	}
	.btn {
		border: 2px solid #b1b942;
	}
	form {
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
		color: rgb(180, 180, 180);
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
	h1 {
		font-family: "Aboreto", cursive;
		font-size: 35px;
		color: white;
		margin-bottom: 0;
		text-shadow: 3px 3px black;
	}
	p {
		font-family: "Cinzel Decorative", cursive;
		margin-top: none;
		font-size: 15px;
		color: white;
	}
	span {
		font-family: Maron;
		color: #b1b942;
	}
</style>
