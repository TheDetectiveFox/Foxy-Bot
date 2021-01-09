const Discord = require('discord.js');
module.exports = {
    name: "github",
    description: "This Command Gives You The Bot Github Page Where You Will Find Its Code",
    run:async(client,message, args) => {
        const gitembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Github ')
        .setDescription('[Click Here](https://github.com/TheDetecitveFox/Foxy-Bot/blob/main/index.js) To Go To The Bot Main Github')
        .setFooter(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic : true })}`)
        .setTimestamp()
        message.channel.send(gitembed);
    }
}