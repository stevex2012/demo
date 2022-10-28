function withedCode(code) {
  const code = `with(globalCtx){ ${code}}`;
  return Function("globalCtx", code);
}

const white_list = ["Math", "Date"];

const code = `
    Math.random();
    location.href = 'https://www.baidu.com';
    func(foo)
`;

const ctx = {
  func: (name) => console.log(name),
  foo: "foo",
};

const proxyCtx = new Proxy(ctx, {
  has: (target, property) => {
    if (white_list.includes(property)) {
      return target[property];
    }
    if (!target.hasOwnProperty(property)) {
      throw Error("invalid propery");
    }
    return true;
  },
});

function litterSandBox(code, ctx) {
  withedCode(code).call(ctx, ctx);
}

litterSandBox(code, proxyCtx);
