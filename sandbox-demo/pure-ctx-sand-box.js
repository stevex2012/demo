function ctxSandBox(code, ctx) {
  eval(code);
}

const ctx = {
  foo: "12321",
  log: (name) => console.log(name),
};

const code = `
    ctx.foo = 'steve';
    ctx.log(ctx.foo)
    console.log(a)
`;
const a = "out a";
ctxSandBox(code, ctx);

//  不可能每个变量都添加ctx前缀，可以访问外部变量
// 还是会引发作用域查找
