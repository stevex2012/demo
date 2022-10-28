import SandBox from "./sand-box.js";

console.log("---gogogo ");

window.b = 2;

new SandBox({
  code: `
        var a = 1;
        console.log(a)
        console.log(window.parent.parent)
        console.log(window)
        
        var el = document.createElement('div')

        document.body.append(el)
        console.log(el)
        
    `,
});
