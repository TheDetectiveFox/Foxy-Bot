const Discord = require('discord.js');
module.exports = {
    name: "about",
    description: "This Command Gives Some Info About The Bot Who Made It? And What Is It For?",
    run:async(client,message, args) => {
        const aboutembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('About The Bot')
        .setDescription('This Bot Was Made By TheDetectiveFox#2369 This Bot Is Planned To Be A Leveling Economy Moderation Fun Bot ')
        .setFooter(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic : true })}`)
        .setTimestamp()
        message.channel.send(aboutembed);
    }
}