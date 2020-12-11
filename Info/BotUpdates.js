const Discord = require('discord.js');
module.exports = {
    name: "botupdates",
    description: "This Command Will Give You Least Updates For The Bot",
    run:async(client,message, args) => {
        const upembed = new Discord.MessageEmbed()
        .setColor('#ffbb00')
        .setTitle('Bot Updates')
        .addFields(
        { name: 'Last News', value: '\`Fixed Errors And Issues\`,\`Added A Better Commands Handler \`' })
        .setFooter('Last Updated 12/11/2020');
            message.channel.send(upembed);
    }
}