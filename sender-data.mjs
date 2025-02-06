import Stream from "node:stream";
const stream = new Stream.Readable();
stream.push('hello')
stream.push('world')
stream.push(null)
export default stream;