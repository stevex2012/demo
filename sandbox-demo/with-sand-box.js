"";

function sandbox(code, ctx) {
  with (ctx) {
    eval(code);
  }
}
const ctx = {
  foo: "12321",
  log: (name) => console.log(name),
};

const code = `
    foo = 'steve';
    log(ctx.foo)
    console.log(a)
`;
sandbox(code, ctx);

const whiteListProrperty = [""];
// with + proxy
// 避免 code 里面访问 ctx 里面没有的变量
let proxyCtx = new Proxy(ctx, {
  get: (target, property) => {
    return target[property];
  },
});

sandbox(code, ctx);
