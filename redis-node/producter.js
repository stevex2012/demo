const redis = require('redis');


const PORT = 6379;
const HOST = '127.0.0.1';

function log(...rest) {
  console.log(...rest)
}
const client = redis.createClient()

function handleError(err) {
  log('err', err)
}
function handleReady(params) {
  log('-------')
  setInterval(() => {
    client.publish('testSecond', 'hi second')
    client.publish('message', 'hi message')
  }, 1000);
  // client.publish('testFirst', 'hi, first!')
  // client.publish('testSecond', 'hi second')
  // client.publish('message', 'hi message')
  // client.publish('message', 'hi message2')
}

client.on('error',handleError)

client.on('ready', handleReady)

client.connect();