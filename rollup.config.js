import commonjs from 'rollup-plugin-commonjs';
import dotenv from 'rollup-plugin-dotenv';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { terser } from 'rollup-plugin-terser';

const dedupe = importee => importee === 'svelte' || importee.startsWith('svelte/')
const production = !process.env.ROLLUP_WATCH;
const preprocess = sveltePreprocess({ postcss: true });

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		dotenv(),
		svelte({
			dev: !production,
			preprocess,
			emitCss: true,
		}),
		resolve({
			browser: true,
			dedupe
		}),
		postcss({
			extract: true,
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

		// 	FIREBASE_APP_API_KEY: process.env.FIREBASE_APP_API_KEY,
		//   FIREBASE_APP_AUTH_DOMAIN: process.env.FIREBASE_APP_AUTH_DOMAIN,
		//   FIREBASE_APP_DATABASE_URL: process.env.FIREBASE_APP_DATABASE_URL,
		//   FIREBASE_APP_PROJECT_ID: process.env.FIREBASE_APP_PROJECT_ID,
		//   FIREBASE_APP_STORAGE_BUCKET: process.env.FIREBASE_APP_STORAGE_BUCKET,
		//   FIREBASE_APP_MESSAGING_SENDER_ID: process.env.FIREBASE_APP_MESSAGING_SENDER_ID,
		//   FIREBASE_APP_APP_ID: process.env.FIREBASE_APP_APP_ID,