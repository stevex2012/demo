import { decode, encode } from "base2048";

const ar = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);

console.log("---ar.length", ar.length);

const encodestr = encode(ar);
console.log("---encodestr", encodestr, encodestr.length);
