import {nodeResolve} from "@rollup/plugin-node-resolve"
import copy from 'rollup-plugin-copy'

export default {
	input: "./src/editor.mjs",
	output: [
		{
			file: "./dist/codemirror.bundle.js",
			format: "iife"
		},
		{
			file: "./../toolbox/js/codemirror.bundle.js",
			format: "iife"
		},
	],
	plugins: [
		nodeResolve(),
		copy({
			targets:[{
				src: 'src/assets/*',
				dest: 'dist'
			}]
		})
	]
}