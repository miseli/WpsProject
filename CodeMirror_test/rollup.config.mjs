import {nodeResolve} from "@rollup/plugin-node-resolve"
export default {
	input: "./src/editor.mjs",
	output: {
		file: "./dist/codemirror.bundle.js",
		format: "iife"
	},
	plugins: [nodeResolve]
}