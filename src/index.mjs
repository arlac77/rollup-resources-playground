 import x from "./document.md";

const myDocument = new URL("document.md", import.meta.url).pathname;

console.log("DOCUMENT", myDocument);
