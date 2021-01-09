const Discord = require('discord.js');
module.exports = {
    name: "botupdates",
    aliases:["bu"],
    description: "This Command Will Give You Least Updates For The Bot",
    run:async(client,message, args) => {
        const upembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Bot Updates')
        .addFields(
        { name: 'Last News', value: '\`Fixed Errors And Issues\`,\`Added A Better Commands Handler \`' })
        .setFooter(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic : true })}`)
        .setTimestamp()
        message.channel.send(upembed);
    }
}