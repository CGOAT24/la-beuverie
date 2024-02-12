<h1>Wrong way pal!</h1>
<svg id="star" width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
	<polygon
		points="50,0 61.8,38.2 100,38.2 69.1,61.8 80.9,100 50,75 19.1,100 30.9,61.8 0,38.2 38.2,38.2"
		fill="#2fff2f"
		stroke="black"
		stroke-width="2"
	/>
</svg>

<style>
	h1 {
		text-align: center;
		font-weight: bold;
		font-size: xxx-large;
	}

	#star {
		position: absolute;
		left: 60%;
		background-color: transparent;
		animation: rotate 5s linear infinite;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
