const amqp = require('amqplib')
async function product(){
  // create client
  const connect = await amqp.connect("amqp://localhost:5672")
  const connection = await amqp.connect("amqp://localhost:5672")

  //get channel
  const channel = connection.createChannel();
  // declare params
  const routingKey = "helloKoalaQueue";
  const msg = "hello koala"
  // send msg
  for (let i = 0; i < 10000; i++) {
    (await channel).publish('',routingKey,Buffer.from(`${msg} 第${i}条消息`))
    
  }
  // close channel
  (await channel).close()
  // close connect
  await connect.close();
}

product();