function sand(ctx, code) {
  return function () {
    eval(code);
  }.bind(ctx)();
}

class SandBox {
  constructor({ code }) {
    const iframe = document.createElement("iframe");
    iframe.name = "sand-box";
    document.body.appendChild(iframe);

    const iframeWindow = iframe.contentWindow;

    const script = document.createElement("script");
    iframeWindow.document.body.append(script);

    iframeWindow.parent = iframeWindow;

    console.log("iframeWindow", iframeWindow.document);

    const aa = new Function("window", "document", `${code}`);

    console.log("aa", aa(iframeWindow, iframeWindow.document));

    // script.innerHTML = `(function (window) {
    //     ${iframeWindow}
    //    ${code};
    // })()`;

    // this.execCode(code);
  }
  execCode(code) {
    const window = 2;

    (() => {
      //   const window = 1;
      eval(code);
    })();
  }
  // 避免逃逸
}
export default SandBox;
