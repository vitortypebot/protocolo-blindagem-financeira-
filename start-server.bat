@echo off
cd /d "C:\Users\vitor\OneDrive\Desktop\projeto"
node -e "const http=require('http'),fs=require('fs'),path=require('path');const s=http.createServer((q,r)=>{let f=path.join('C:\\Users\\vitor\\OneDrive\\Desktop\\projeto',q.url==='/'?'index.html':q.url);const t={'.html':'text/html','.css':'text/css','.js':'application/javascript'};fs.readFile(f,(e,d)=>{if(e){r.writeHead(404);r.end('Not found');}else{r.writeHead(200,{'Content-Type':t[path.extname(f)]||'text/plain'});r.end(d);}});});s.listen(3000,'0.0.0.0',()=>console.log('Server on http://localhost:3000'));"
pause
