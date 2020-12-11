const Discord = require('discord.js');
module.exports = {
    name: "about",
    description: "This Command Gives Some Info About The Bot Who Made It? And What Is It For?",
    run:async(client,message, args) => {
        const aboutembed = new Discord.MessageEmbed()
        .setColor('#ffbb00')
        .setTitle('About The Bot')
        .setDescription('This Bot Was Made By TheDetectiveFox#1633 This Bot Is Planned To Be A Leveling Economy Moderation Fun Bot ')
        .setFooter('Wirtten By Owner Of Bot');
            message.channel.send(aboutembed);
    }
}