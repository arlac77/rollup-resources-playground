import resolve from "@rollup/plugin-node-resolve";

export default {
  input: `src/index.mjs`,
  output: {
    sourcemap: true,
    format: "esm",
    file: `${basedir}/public/bundle.main.mjs`
  },
  plugins: [resolve({})]
};
