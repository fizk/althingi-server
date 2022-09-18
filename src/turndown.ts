// import TurndownService from 'https://cdn.skypack.dev/turndown@7.1.1';

// import * as turndownPluginGfm from 'https://cdn.skypack.dev/@guyplusplus/turndown-plugin-gfm@1.0.7';
// // deno-lint-ignore no-explicit-any
// const { gfm } = turndownPluginGfm as any;

// import jsdom from "https://jspm.dev/jsdom@16.6.0";
// // deno-lint-ignore no-explicit-any
// const { JSDOM } = jsdom as any;

// // Create a global window.document so that there is a virtual DOM for Turndown
// declare global {
//     // deno-lint-ignore no-explicit-any
//     var document: any;
//     interface Window {
//         // deno-lint-ignore no-explicit-any
//         document: any;
//     }
// }
// window.document = new JSDOM().window.document;

// const turndownService = new TurndownService({
//     hr: '---',
//     codeBlockStyle: 'fenced'
// });
// turndownService.use(gfm);

// export default (html: string) => turndownService.turndownService(html);


import tds from "https://cdn.skypack.dev/turndown@7.1.1"

// JSDOM imports .json files, which doesn't seem to work in deno/skypack:
// import * as jsdom from "https://cdn.skypack.dev/jsdom@16.6.0"

// This one doesn't have a cloneNode() implementation yet:
// import { DOMParser, Element } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

// So import directly from GitHub: 😬
import { DOMParser } from "https://github.com/b-fuze/deno-dom/raw/188d7240e5371caf1b4add8bb7183933d142337e/deno-dom-wasm.ts"


const parser = new DOMParser()
const service = new tds({})
export default function example(html: string) {
    const doc = parser.parseFromString(html, "text/html")
    if (!doc) { throw `failed to parse doc` }
    return service.turndown(doc)
}