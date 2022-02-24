console.log('sleep')
// let
let name = 'foo & bar'
await $`rm -rf ${name}`
await $`mkdir ${name}`
await sleep(1000)
await $`pwd`

try {
  await $`exit 1`
} catch (e) {
  console.log(`Exit code: ${e.exitCode}`)
  console.log(`error: ${e.stderr}`)
}

await $`cat file.txt`.pipe(process.stdout)

cd('../')
await $`pwd`

await $`cat package.json`.pipe(process.stdout)

cd('./script')
// 
let bear = await question('what kind of bear is best?', {choices: ['1','2','3']});

console.log('bear',bear)

await nothrow($`grep something from-file`)
// await $`find ./examples -type f -print0`
//   .pipe(nothrow($`xargs -0 grep something`))
//   .pipe($`wc -l`)
console.log(123)

// 自带包
console.log(chalk.blue('heelo'))

console.log(YAML.parse('foo: bar').foo)


let content = await fs.readFile('../package.json', 'utf-8')
console.log('content',content)

//globby,
//os
//path,
// minimist 