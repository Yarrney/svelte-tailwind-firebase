import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
// import sveltePreprocess from 'svelte-preprocess';
import sveltePreprocessPostcss from 'svelte-preprocess-postcss'

const production = !process.env.ROLLUP_WATCH;
// const preprocess = sveltePreprocess({ postcss: true });
const stylePreprocessor = sveltePreprocessPostcss({
    configFilePath: '',
    useConfigFile: true,
    plugins: [
        require('precss')
    ]
})

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		postcss({
			extract: true
		}),
		svelte({
			dev: !production,
			preprocess: {
                style: stylePreprocessor
            },
			// emitCss: true,
			css: css => {
				css.write('public/build/bundle.css');
			}
		}),
		resolve({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
		}),
		commonjs(),
		!production && serve(),
		!production && livereload('public'),
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}