function fn1(arg){
  console.log('fn1 arg is ', arg);
  return arg;
};
function fn2(arg){
  console.log('fn2 arg is ', arg);
  return arg;
};
function fn3(arg){
  console.log('fn3 arg is ', arg);
  return arg;
};


// 执行 all funs

// step1: 
fn1('lalala');
fn2('lalala');
fn3('lalala');

// step2: 洋葱 
fn3(fn2(fn1('lll')));

// step3: compose
const wait = compose1(fn1,fn2, fn3);
wait('compose');
// console.log('--wait', JSON.stringify(wait))
function compose(...funcs){
  return function(arg){
    funcs.forEach(fun => fun(arg))
  }
}

function compose1(...funcs){
  return funcs.reduce((a,b) => (arg) => a(b(arg)))
}