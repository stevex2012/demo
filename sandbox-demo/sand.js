function withYourCode(code, ctx) {
  const code = `with(ctx){code}`;
  return Function(`ctx`, code);
}

class SandBoxPrxy {
  constructor(whiteList) {
    const iframe = document.createElement("iframe");
    document.body.append(iframe);

    const iframeWindow = iframe.contentWindow;

    return new Proxy(iframeWindow, {
      has: (target, property) => {
        if (whiteList.includes(property)) {
          return target[property];
        }
        if (!target.hasOwnProperty(property)) {
          throw Error("invalid propery");
        }
        return true;
      },
    });
  }
}
const sandFn = (code, ctx) => {
  return withYourCode(code).call(ctx, ctx);
};
