<script>
	export let name;
	import { darkTheme } from './components/stores.js';
	import Theme from './components/Theme.svelte';
</script>

<div class="{$darkTheme ? "theme-dark" : "theme-basic"} bg-default h-full min-h-screen">
	<main>
		<h1>Hello {name}!</h1>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

		<Theme classes={"mt-12 mx-auto md:mx-0 flex"}/>
		
	</main>
</div>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>