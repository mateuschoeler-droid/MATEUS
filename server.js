import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.join(path.dirname(fileURLToPath(import.meta.url)),'public');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.jpg':'image/jpeg','.svg':'image/svg+xml','.png':'image/png','.pdf':'application/pdf','.ttf':'font/ttf'};
http.createServer(async(req,res)=>{try{const p=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const target=path.resolve(root,'.'+(p==='/'?'/index.html':p));if(!target.startsWith(root+path.sep)){res.writeHead(403);return res.end();}const data=await readFile(target);res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(data);}catch{res.writeHead(404);res.end('Não encontrado');}}).listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log('Mappa Viagens disponível na porta '+(process.env.PORT||3000)));
