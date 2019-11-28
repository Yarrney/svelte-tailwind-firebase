<script>
	import {link, push, pop} from 'svelte-spa-router';
	import active from 'svelte-spa-router/active';
</script>

<style>

	a {
		@apply flex h-full justify-center mx-2 items-center;
	}

	svg {
		@apply fill-current inline-flex h-6 w-6 mr-2;
	}

	p {
		@apply hidden;
	}

	:global(a.active) {
		@apply text-primary;
	}

	@screen md {
		:global(a.active) {
			@apply text-secondary border-solid border-b-2;
			padding-top: 2px;
			border-color: var(--color-text-secondary);
		}

		svg {
			@apply hidden;
		}

		p {
			@apply block;
		}

		li {
			@apply h-full;
		}

	}

</style>

<nav class="bg-primary md:bg-secondary font-light text-default md:text-default h-16 w-full fixed md:mt-16 bottom-0 md:bottom-auto">
	<ul class="flex flex-row items-center justify-around md:justify-start md:mx-8 h-full">
		<li>
			<a href='/' use:link use:active>
				<svg>
					<use xlink:href="assets/solid.svg#home"></use>
				</svg>
				<p>home<p>
			</a>
		</li>
		<li>
			<a href='/blog' use:link use:active>
				<svg>
					<use xlink:href="assets/solid.svg#calendar-check"></use>
				</svg>
				<p>blog<p>
			</a>
		</li>
		<li>
			<a href='/settings' use:link use:active>
				<svg>
					<use xlink:href="assets/solid.svg#cog"></use>
				</svg>
				<p>settings<p>
			</a>
		</li>
	</ul>
</nav>