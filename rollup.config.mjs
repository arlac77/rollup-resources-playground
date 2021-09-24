import smartAsset from "rollup-plugin-smart-asset";

export default {
  input: `src/index.mjs`,
  output: {
    dir: "build",
    format: "cjs"
  },
  plugins: [
    smartAsset({
      emitFiles: true,
      url: "copy",
      include: ["**/*.md"]
    })
  ]
};
