<script>
	export let segment;
	import { darkTheme } from './components/stores.js';
	import Theme from './components/Theme.svelte';
	import Nav from './components/Nav.svelte';
	import Router from 'svelte-spa-router';
	import routes from './routes';
</script>

<div class="{$darkTheme ? "theme-dark" : "theme-basic"} bg-default h-full min-h-screen">

	<div class="fixed top-0 h-16 w-full flex flex-row items-center justify-around bg-primary text-primary font-extrabold text-3xl">
		This is a title.
	</div>

	<Nav />

	<main class="text-default pt-20 md:pt-40 px-8 pb-8 max-w-4xl mx-auto">
		<Router {routes} />
		<Theme classes={"mt-12 mx-auto md:mx-0 flex"}/>
	</main>
</div>