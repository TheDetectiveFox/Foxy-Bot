const Discord = require('discord.js');
module.exports = {
    name: "support",
    description: "This Command Will Give You A Link For The Support Server",
    run:async(client,message, args) => {
        const supembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Discord Support Server')
        .setDescription('[Click Here ](https://discord.gg/CsxpcqwKnt)To Join Discord Support Server You Can Meet Owner And Report Bugs Or Suggest Stuff In That Discord!!')
        .setFooter(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic : true })}`)
        .setTimestamp()
        message.channel.send(supembed);
    }
}