
// 
const Koa = require('koa');
const fs = require('fs')
const path = require('path')
//babel 核心库，用来实现核心转换引擎
const babel = require('@babel/core')
const traverse = require('@babel/traverse').default
const parser = require('@babel/parser');
// const app = new Koa();
const PORT = 3000;

const websockify = require('koa-websocket')

const app = websockify(new Koa())

// io.on('connection', client => { 
//   client.on('event', data => { 
//     console.log('event')
//   });
//   client.on('disconnect', () => { 
//     console.log('disconnect')
//    });
// });


const server = require('http').createServer(app.callback());




fs.watch('./src', { encoding: 'utf-8' }, (eventType, filename) => {
  if (filename) {
    console.log(filename);
    // Prints: <Buffer ...> 如何刷新浏览器 window.reload()
    // socket 通信
  }
});

app.use(async ctx => {
  
  const reqUrl = ctx.request.url
  if(reqUrl === '/'){
    const html = fs.readFileSync('./src/index.html', 'utf-8')
    ctx.type = 'text/html'
    ctx.body = html;
  }else if(reqUrl.startsWith('/modules')){
    
    const rPath = path.resolve(__dirname, './node_modules')
    console.log('---rPath',rPath)

    const fileUrl = reqUrl.replace('/modules', '')

    // package.json
    const pkg = fs.readFileSync(`${rPath}${fileUrl}/package.json`)


    ctx.type = 'application/javascript'
    if(pkg.module){
      // const 
      const esMoudleFile = fs.readFileSync(`${rPath}${fileUrl}/${pkg.module}`)
      ctx.body = esMoudleFile
      return
    }

    // const file = fs.readFileSync(`${rPath}${fileUrl}/index.js`, 'utf-8')

    

    // require function
    require('esbuild')
      .buildSync({
        entryPoints: [`${rPath}${fileUrl}/index.js`],
        bundle: true,
        format: 'esm',
        outfile: `./dist/${reqUrl}.js`
      })
    console.log('---------')
    const newFile =  fs.readFileSync(`./dist/${reqUrl}.js`,'utf-8')
      // .transformSync(`${newFile}`, {
      //   format: 'esm',
      // })

    // console.log('----esModuleCode', newFile)
    console.log('read---------',reqUrl)
    // ctx.body = `(function (){
    //   ${file}
    //   export default {}
    // })()`
    // es5 ---> es6
    // 循环require
    ctx.body = newFile
    // ctx.body = `
    //   function require(){
    //     return {}
    //   }
    //   var module = {
    //     exports: {}
    //   }
    //   ${file}
    //   export default {}
    // `

  }else if(reqUrl.endsWith('.js') || reqUrl.endsWith('.jsx') ) {
    // let rPath = path.resolve(__dirname)
    let rPath = path.resolve(__dirname, './src')
    // console.log('-rPath', rPath)
    // 分析 file conetent，解析出 from ’react' 这种，添加规则 @/modules reaplace ast
    const file = fs.readFileSync(`${rPath}${reqUrl}`, 'utf-8')

    
    const tFile = require("@babel/core").transformSync(file, {
      plugins: ["@babel/plugin-transform-react-jsx"],
    });

    // console.log('---transformCode', tFile)

    const ast = parser.parse(tFile.code, {
      sourceType: 'module'
    });
   
    // console.log('---ast')

    //修改路径
    traverse(ast, {
      ImportDeclaration({node}){

        if(!node.source.value.includes('.js')){
          node.source.value = `/modules/${node.source.value}`
        }
      }
    })
    
    const result = babel.transformFromAstSync(ast, tFile.code)
    // console.log('result.code', result)
    
    // ctx.body = result.code
    ctx.type = 'application/javascript'
    ctx.body = result.code

  }else{

    
  }
});

// app.

// app.listen(PORT, () => console.log('server is running at port ' + PORT));

app.listen(PORT, () => console.log('server is running at port ' + PORT));