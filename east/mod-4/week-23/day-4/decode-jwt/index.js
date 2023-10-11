// Decode a JWT
// In this practice, you will decode a JWT using only basic JavaScript functions.
// A sample JWT has been provided for you.
// 1) Split the JWT into 3 parts - the header, the payload, and the signature.
// 2) Decode the header and payload.
// 3) Finally, take note of the algorithm and email. You'll need these to complete the next quiz.

// Parsing a JWT

const sampleJwt =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im15c2VsZkBhcHBhY2FkZW15LmlvIn0.EqRikwoGyAlfvblF_FdbnQlbAQGvWZlccFnmHOVdaLg";

// #1: Splitting the JWT into 3 parts: header, payload, signature

const parts = sampleJwt.split(".");
// console.log(parts);

// #2: Decoding a JWT's header and payload
// Hint: Buffer.from(string, 'base64').toString();
const header = Buffer.from(parts[0], "base64").toString();
const payload = Buffer.from(parts[1], "base64").toString();

console.log(header);
console.log(payload);
