import PointService from "../service/PointService.mjs";
import PrototypeProtocol from "./prototype-protocol.mjs";
import http from 'node:http'

const server = http.createServer();
const service = new PointService()
const protocol = new PrototypeProtocol(service, server);

server.listen(3500);
console.log(`Server running at http://localhost:3500`);
server.on('request', async (req, res) => {
   let data = '';
   // console.log(req.method, req.url);
   
   for await (const part of req) {
      data += part;
   }
   server.emit(req.url, data, res); 
})

// {
//    "id": 1,
//    "x": "world"
// }