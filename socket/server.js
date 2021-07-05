const Koa = require('koa')
const route = require('koa-route')
const websockify = require('koa-websocket');
const fs = require('fs') 


const wsOptions = {};
const app = websockify(new Koa(), wsOptions);
const PORT = 3000;




// function watchFile() {
  fs.watch('./src', 'utf-8', (eventType, filename)=> {
    console.log('---filename', filename)
    // 通知socket 
    // ctx.websocket.send('reload')
    
  })
// }

// 监听 与socket 顺序问题
app.ws.use(route.all('/', (ctx) => {
  console.log('llll')
   // the websocket is added to the context as `ctx.websocket`.
  ctx.websocket.on('message', function(message) {
    // print message from the client
    console.log(message);
  });

}));



app.use((ctx) => {
  ctx.type = 'text/html'
  const content = fs.readFileSync('./src/index.html', 'utf-8')
  ctx.body = content;
})
 
app.listen(PORT, () => {
  // watchFile()
  console.log(`server running at port ${PORT}`)
});
