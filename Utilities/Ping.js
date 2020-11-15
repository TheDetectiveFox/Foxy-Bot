module.exports = {
    name: "ping",
    description: "This Command Sees Your Ms Ping",
    execute(message, args){
        message.channel.send('pinging...').then(pingMessage => {
            
            const start = message.createdTimestamp;
            const end = pingMessage.createdTimestamp;
            const subtraction = end - start;
            
            pingMessage.edit(` ${subtraction} ms.`)
            })
    }
}