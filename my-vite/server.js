
// 
const Koa = require('koa');
const fs = require('fs')
const path = require('path')
//babel 核心库，用来实现核心转换引擎
const babel = require('@babel/core')
const traverse = require('@babel/traverse').default
const parser = require('@babel/parser');
const { Z_DEFLATED } = require('zlib');
const app = new Koa();
const PORT = 3000;

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

    const file = fs.readFileSync(`${rPath}${fileUrl}/index.js`)

    ctx.type = 'application/javascript'

    ctx.body = file

  }else if(reqUrl.endsWith('.js')) {
    // let rPath = path.resolve(__dirname)
    let rPath = path.resolve(__dirname, './src')
    // console.log('-rPath', rPath)
    // 分析 file conetent，解析出 from ’react' 这种，添加规则 @/modules reaplace ast
    const file = fs.readFileSync(`${rPath}${reqUrl}`, 'utf-8')
    // file.replace('')
    const ast = parser.parse(file, {
      sourceType: 'module'
    });
    
    

    traverse(ast, {
      ImportDeclaration({node}){
        
        if(!node.source.value.includes('.js')){
          node.source.value = `/modules/${node.source.value}`
        }
        // console.log('node.source', node.source)
      }
    })
    const result = babel.transformFromAstSync(ast, file)
    // console.log('result.code', result.code)
    ctx.type = 'application/javascript'

    ctx.body = result.code

  }else {

  }
});

// app.

app.listen(PORT, () => console.log('server is running at port ' + PORT));