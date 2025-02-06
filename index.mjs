// import stream from "./sender-data.mjs";
import stream from "./file-stream.mjs";
import writableStream from "./file-writable-stream.mjs";

(async () => {
  for await (const res of stream) {
    console.log(res.toString());
  }
})();
writableStream.write("hello");
writableStream.write("World !!!");
writableStream.end();