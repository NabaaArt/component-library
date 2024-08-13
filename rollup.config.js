// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import typescript from "@rollup/plugin-typescript";
// import dts from "rollup-plugin-dts";
// import packageJson from "./package.json" assert { type: "json" };
// import postcss from "rollup-plugin-postcss";
// import sourcemaps from "rollup-plugin-sourcemaps";

// export default [
//   {
//     external: ["react", "react-dom"],
//     input: "src/index.ts",
//     output: [
//       {
//         file: packageJson.main,
//         format: "cjs",
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: "esm",
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       resolve(),
//       commonjs(),
//       typescript({ tsconfig: "./tsconfig.json" }),
//       postcss({
//         config: {
//           path: "./postcss.config.js",
//         },
//         extensions: [".css"],
//         minimize: true,
//         inject: {
//           insertAt: "top",
//         },
//         extract: 'index.css', 
//         minimize: true,
//       }),
    
//       sourcemaps(),
//     ],
//   },
//   {
//     input: "dist/esm/types/index.d.ts",
//     output: [
//       { file: "dist/index.d.ts", format: "esm" },
//       {
//         file: "dist/index.css",
//         format: "es",
//       },
//     ],
//     plugins: [dts()],
//   },
// ];


import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };
import postcss from "rollup-plugin-postcss";
import sourcemaps from "rollup-plugin-sourcemaps";

export default [
  {
    external: ["react", "react-dom"], // Correctly marking React as external
    input: "src/index.ts", // Entry point
    output: [
      {
        file: packageJson.main, // CommonJS output
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module, // ES module output
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(), // Resolve node modules
      commonjs(), // Convert CommonJS modules to ES6
      typescript({ tsconfig: "./tsconfig.json" }), // TypeScript support
      postcss({
        config: {
          path: "./postcss.config.cjs", // Ensure this is correct
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
        extract: 'index.css', // Extract CSS to a file
      }),
      sourcemaps(), // Include sourcemaps
    ],
  },
]
