<template>
	<section id="landing">
		<div class="father">
			<div class="div1">
				<h1 id="h1">Royale <span>JEWELLERS</span></h1>
				<h2 id="h2">Luxury Time Keepers</h2>
				<h5 id="h5">authorized retailer since 1990</h5>
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
					width="750"
					src="https://i.postimg.cc/RhKVd9X1/pngegg-3-1.png"
					alt=""
				/>
			</div>
		</div>
	</section>
	<section id="about" class="about">
		<div id="adiv">
			<h1 id="ah1">About <span>Us</span></h1>
			<p>
				Past, Present. This is how we started at the bottom and reached the top.
			</p>
		</div>

		<div class="mother">
			<div class="son1">
				<p>
					<i class="fa-solid fa-chevron-right"></i>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
					impedit harum tempore minus, ab asperiores soluta temporibus, labore
					corrupti esse voluptatibus explicabo, cumque voluptates aut amet at.
					Esse, soluta sed. Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Incidunt aspernatur sunt inventore a totam ipsam cum labore?
					Velit perspiciatis molestiae blanditiis impedit ipsa facere sapiente
					itaque asperiores cum? Animi, quas.
				</p>
			</div>
			<div class="son2">
				<div id="card1">
					<img
						id="cimg"
						src="https://i.postimg.cc/1XXTxgM0/1113519.jpg"
						alt=""
					/>
					<img
						id="cimg2"
						src="https://i.postimg.cc/Hk8rYBjR/pexels-pixabay-220453.jpg"
						alt=""
					/>
					<h3>Mika Rinquest</h3>
					<h5>Founders</h5>
					<div>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
							repellendus ab facere, praesentium vero voluptatibus voluptas!
							Ipsa eligendi distinctio at perferendis eos incidunt consectetur.
							Dolor quae voluptatum at amet nostrum?
						</p>
					</div>
					<div id="iconss">
						<i id="github" class="fa-brands fa-github"></i>
						<i id="linkedin" class="fa-brands fa-linkedin"></i>
					</div>
				</div>
				<div id="card2">
					<img
						id="cimg"
						src="https://i.postimg.cc/KzfShhbb/733995.jpg"
						alt=""
					/>
					<img
						id="cimg2"
						src="https://i.postimg.cc/3RF4MNWw/pexels-andrea-piacquadio-3973335.jpg"
						alt=""
					/>
					<h3>Mudassar K</h3>
					<h5>Founders</h5>
					<div>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
							repellendus ab facere, praesentium vero voluptatibus voluptas!
							Ipsa eligendi distinctio at perferendis eos incidunt consectetur.
							Dolor quae voluptatum at amet nostrum?
						</p>
					</div>
					<div id="iconss">
						<i id="github" class="fa-brands fa-github"></i>
						<i id="linkedin" class="fa-brands fa-linkedin"></i>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section id="quick">
		<div id="qdiv">
			<h1>Flash <span>Sale</span></h1>
			<p>Premium jewellery at reduced prices for the next 24 hours.</p>
		</div>
		<div class="mother">
			<div id="flashcards">
				<div id="card3">
					<img
						id="cimg3"
						height="280"
						width="280"
						src="https://i.postimg.cc/sXFj12pP/pngegg.png"
						alt=""
					/>
				</div>
				<div id="card3">
					<img
						id="cimg3"
						height="330"
						width="230"
						src="https://i.postimg.cc/tTzNmKTP/pngegg-1.png"
						alt=""
					/>
				</div>
				<div id="card3">
					<img
						id="cimg3"
						height="270"
						width="190"
						src="https://i.postimg.cc/SQWhy102/Seek-Png-com-rolex-watch-png-2812201.png"
						alt=""
					/>
				</div>
				<div id="card3">
					<img
						id="cimg3"
						height="260"
						width="175"
						src="https://i.postimg.cc/TYfXhjGk/Seek-Png-com-rolex-watch-png-7924376.png"
						alt=""
					/>
				</div>
				<div id="card3">
					<img
						id="cimg3"
						height="280"
						width="170"
						src="https://i.postimg.cc/BbrvrXR8/Seek-Png-com-duck-dynasty-beard-png-5772739.png"
						alt=""
					/>
				</div>
				<div id="card3">
					<img
						id="cimg3"
						height="260"
						width="160"
						src="https://i.postimg.cc/FzMbfNCM/Seek-Png-com-black-desert-png-3455060.png"
						alt=""
					/>
				</div>
			</div>
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
		height: 81vh;
		background-color: #131312;
		background-size: cover;
		border-bottom: 1px solid #b1b942;
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
	#h1 {
		position: absolute;
		margin-top: -14%;
		font-family: "Aboreto", cursive;
		font-size: 70px;
		color: white;
		margin-bottom: none;
	}
	#h2 {
		font-family: "Cinzel Decorative", cursive;
		margin-top: none;
		letter-spacing: 5px;
		font-size: 30px;
		color: white;
	}
	#h5 {
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
		border: 1px solid #b1b942;
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
		border: 1px solid #b1b942;
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
		border: 1px solid #b1b942;
	}
	.fa-github {
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
		border: 1px solid #b1b942;
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
		border: 1px solid #b1b942;
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
		border: 1px solid #b1b942;
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
		border: 1px solid #b1b942;
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
	.fa-github:hover {
		background-color: #131312;
		color: white;
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
	#about {
		height: 100vh;
		padding: 20px;
		background-color: #131312;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid #b1b942;
	}
	#ah1 {
		font-family: "Aboreto", cursive;
		font-size: 70px;
		color: white;
		margin-bottom: none;
	}
	#adiv {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: start;
		align-items: center;
	}
	#adiv p {
		text-align: center;
		color: white;
		font-family: "Cormorant SC", serif;
		font-size: 25px;
	}
	.mother {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.son1 {
		height: 500px;
		width: 50%;
		gap: 15px;
		padding: 15px;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
	}
	.son1 p {
		font-family: "Aboreto", cursive;
		font-size: 17px;
		color: white;
		text-shadow: 2px 2px black;
		padding-bottom: 15px;
		padding: 20px;
		text-align: center;
	}
	.son2 {
		height: 500px;
		width: 50%;
		display: flex;
		flex-direction: row;
		gap: 25px;
	}
	#card1 {
		min-height: 500px;
		width: 47%;
		background-color: #183c38;
		border: 1px solid #b1b942;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	#card1 p {
		text-align: center;
		color: white;
		font-size: 19px;
		line-height: 20px;
		font-family: "Cormorant SC", serif;
		text-shadow: 1px 1px black;
	}
	#card1 h3 {
		margin-top: 25px;
		color: white;
		font-family: "Aboreto", cursive;
	}
	#card1 h5 {
		color: #b1b942;
		font-family: Maron;
	}
	#card1 div {
		padding: 8px;
	}
	#cimg {
		width: 100%;
		height: 38%;
	}
	#cimg2 {
		border-radius: 50%;
		width: 130px;
		height: 120px;
		position: absolute;
		bottom: -55%;
		object-fit: cover;
		aspect-ratio: 1;
	}
	#card2 {
		min-height: 500px;
		width: 47%;
		background-color: #183c38;
		border: 1px solid #b1b942;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		box-shadow: 18px 18px 36px #080807, -18px -18px 36px #1e1e1d;
	}
	#card2 p {
		color: white;
		text-align: center;
		font-size: 19px;
		line-height: 20px;
		font-family: "Cormorant SC", serif;
		text-shadow: 1px 1px black;
	}
	#card2 h3 {
		margin-top: 25px;
		color: white;
		font-family: "Aboreto", cursive;
	}

	#card2 h5 {
		color: #b1b942;
		font-family: Maron;
	}
	#card2 div {
		padding: 8px;
	}
	.fa-github {
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
	#github {
		font-size: 28px;
		display: inline-block;
		background: #040f0f;
		color: white;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		border-radius: 50%;
		text-align: center;
		width: 45px;
		border: 1px solid #b1b942;
	}
	#linkedin {
		font-size: 28px;
		display: inline-block;
		background: #040f0f;
		color: white;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		border-radius: 50%;
		text-align: center;
		width: 45px;
		border: 1px solid #b1b942;
	}
	#github:hover {
		background-color: #131312;
		color: white;
		transition: 1s;
		border: none;
	}
	#linkedin:hover {
		color: #0077b5;
		background-color: white;
		transition: 1s;
		border: none;
	}
	#card1:hover {
		box-shadow: 10px 10px 40px #b1b942, -10px -10px 40px #858b37;
		transition: 2s;
		border: none;
	}
	#card2:hover {
		box-shadow: 10px 10px 40px #b1b942, -10px -10px 40px #858b37;
		transition: 2s;
		border: none;
	}
	#iconss {
		margin-bottom: 5px;
	}
	#quick {
		height: 80vh;
		padding: 20px;
		background-color: #131312;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	#qdiv h1 {
		font-family: "Aboreto", cursive;
		font-size: 70px;
		color: white;
		margin-bottom: none;
		text-align: center;
	}
	#qdiv p {
		text-align: center;
		color: white;
		font-family: "Cormorant SC", serif;
		font-size: 25px;
	}
	#card3 {
		height: 300px;
		width: 200px;
		background-color: #183c38;
		border: 1px solid #b1b942;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-shadow: 27px 27px 54px #080807, -27px -27px 54px #1e1e1d;
	}
	#cdiv3 {
		display: block;
	}
	#flashcards {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-content: center;
		gap: 25px;
	}
	#cimg3 {
		transform: rotate(30deg);
		overflow: hidden;
	}
	#cimg3:hover {
		transform: rotate(0deg);
		transition: 1s;
	}

	#card3:hover {
		box-shadow: 5px 5px 10px #b1b942, -5px -5px 10px #858b37;
		transition: 1s;
		border: none;
	}
</style>
