import url from "@rollup/plugin-url";

export default {
  input: `src/index.mjs`,
  output: {
    dir: "build",
    format: "cjs"
  },
  plugins: [
    url({
      emitFiles: true,
      destDir: "output",
      include: ["**/*.md"]
    })
  ]
};
