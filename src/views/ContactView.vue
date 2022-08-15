<template>
	<section>
		<div class="section">
			<div class="contact">
				<div class="form2">
					<form>
						<h1>Contact <span>Us</span></h1>
						<p>Send us a message with your question.</p>
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
							<label>Phone Number</label>
						</div>
						<div class="group">
							<input type="text" required />
							<span class="highlight"></span>
							<span class="bar"></span>
							<label>Message</label>
						</div>
						<button class="btn text-light">Sign Up</button>
					</form>
				</div>

				<div class="map1">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44180.36354473791!2d6.144088549999999!3d46.2050295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c650693d0e2eb%3A0xa0b695357b0bbc39!2sGeneva%2C%20Switzerland!5e0!3m2!1sen!2sza!4v1660211927966!5m2!1sen!2sza"
						width="603"
						height="523"
						style="border: 0"
						allowfullscreen=""
						loading="eager"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</div>
	</section>
</template>
<script></script>
<style scoped>
	.section {
		height: 87vh;
		background-color: #131312;
		/* background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
			url("https://i.postimg.cc/cLG1QDXB/rishi-jhajharia-1-Ck-SNmb-T7-J0-unsplash.jpg");
		background-size: cover;
		backdrop-filter: blur(90px); */
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.btn {
		border: 2px solid #b1b942;
		background-color: #183c38;
	}
	.btn:hover {
		background-color: #183c3873;
		transition: 0.6s;
	}
	.contact {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 20px;
		width: 80%;
		height: 80%;
		background-color: #040f0f;
		border: 1px solid #b1b942;
		box-shadow: 50px 50px 100px #080807, -50px -50px 100px #1e1e1d;
	}
	.map1 {
		width: 603px;
	}
	.form2 {
		width: 590px;
		height: 503px;
		display: flex;
		flex-direction: column;
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
		margin-bottom: 25px;
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
	@-moz-keyframes inputHighlighter {
		from {
			background: #b1b942;
		}
		to {
			width: 0;
			background: transparent;
		}
	}
	@keyframes inputHighlighter {
		from {
			background: #b1b942;
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
		text-align: center;
	}
	p {
		font-family: "Cormorant SC", serif;
		margin-top: none;
		font-size: 19px;
		color: white;
		text-align: center;
	}
	span {
		font-family: Maron;
		color: #b1b942;
	}
</style>
