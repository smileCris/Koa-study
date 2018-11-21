const Koa = require('koa');
const app = new Koa();

const path = require('path');
const static = require('koa-static');

const staticPath = './static';

app.use(static(
  path.join(__dirname, staticPath)
));

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method}  ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000, function () {
  console.log("应用实例，访问地址为 127.0.0.1:3000");
});