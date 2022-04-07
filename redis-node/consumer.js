
const redis = require('redis');

const PORT = 6379;
const HOST = '127.0.0.1';

const client = redis.createClient();
function log(...rest) {
  console.log(...rest)
}
function handleError(err) {
  log('err', err)
}
let msgList = [];

client.on('error',handleError)

function handleSubscribeChannel(msg, channel) {
  log(`msg: '${msg}' from channel: '${channel}'`)
}

client.subscribe('testSecond',handleSubscribeChannel)
client.subscribe('message',(msg, channel)=>{
  if(msgList.length === 5){
    log(msgList)
    msgList = []
  }else{
    msgList.push({
      msg, 
      channel
    })
  }
})

function handleSubscribe(channel, count) {
  log(`subscribe channel ${channel}, count: ${count}`)
}

function handleUnSubscribe(channel, count) {
  log(`unsubscribe channel ${channel}, count: ${count}`)
  
}

function handleMessage(channel, msg) {
  log(`message channel ${channel}, msg: ${msg}`)
}

// client.addListener('subscribe',handleSubscribe)

client.on('subscribe', handleSubscribe)

client.on('message', handleMessage)
// client.on('message', handleMessage)

client.on('unsubscribe', handleUnSubscribe)

client.connect()
