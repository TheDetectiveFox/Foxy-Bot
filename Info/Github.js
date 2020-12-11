const Discord = require('discord.js');
module.exports = {
    name: "github",
    description: "This Command Gives You The Bot Github Page Where You Will Find Its Code",
    run:async(client,message, args) => {
        const gitembed = new Discord.MessageEmbed()
        .setColor('#ffbb00')
        .setTitle('Github ')
        .setURL('https://github.com/TheDetecitveFox/Foxy-Bot/blob/main/index.js')
        .setDescription('This Is The Main Git Hub You Will See All The Code There')
            message.channel.send(gitembed);
    }
}