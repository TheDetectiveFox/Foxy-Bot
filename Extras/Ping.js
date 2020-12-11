const Discord = require('discord.js');
module.exports = {
    name: "ping",
    aliases:["pong"],
    description: "This Command Sees Your Ms Ping",
    run:async(client, message, args) => {
        message.channel.send('pinging...').then(pingMessage => {
            
            const start = message.createdTimestamp;
            const end = pingMessage.createdTimestamp;
            const subtraction = end - start;
            
            pingMessage.edit(` ${subtraction} ms.`)
            })
    }
}