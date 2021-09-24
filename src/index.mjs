 import x from "../resources/document.md";

const myDocument = new URL("../resources/document.md", import.meta.url).pathname;

console.log("DOCUMENT", myDocument, x);
