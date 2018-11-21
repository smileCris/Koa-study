// 下载并引入koa-router
// $ npm i koa-router --save
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  let html = `
    <ul>
      <li><a href="/hello">helloworld</a></li>
      <li><a href="/about">about</a></li>
    </ul>
  `
  ctx.body = html
}).get('/hello', async (ctx) => {
  ctx.body = 'helloworld'
}).get('/about', async (ctx) => {
  ctx.body = 'about'
})

app.use(router.routes(), router.allowedMethods())

app.listen(3000, function(){
  console.log('127.0.0.1:3000')
})