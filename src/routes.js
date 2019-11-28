
// Routes
import Blog from './routes/Blog.svelte'
import Home from './routes/Home.svelte'
import NotFound from './routes/NotFound.svelte'
import Settings from './routes/Settings.svelte'

const routes = {
	'/': Home,
	'/settings': Settings,
	'/blog': Blog,
	'*': NotFound,
}

export default routes;
