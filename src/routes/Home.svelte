<script>
	let image = "/assets/undraw_to_the_moon_v1.svg";
	import { db } from "./../firebase";

	// get movies
	export let movies = [];
	db.collection('movies').onSnapshot(res => {
		movies = res.docs
	});

</script>

<h1> Home! </h1>

{#each movies as movie}
	<li>{movie.data().title}</li>
{:else}
	<p>Loading...</p>
{/each}

<p>Illustration by <a class="link-primary" href="https://undraw.co" target="_blank">unDraw</a></p>

<object class="w-full" type="image/svg+xml" data={image} title="illustration">Illustration</object>

