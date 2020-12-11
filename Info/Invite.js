const Discord = require('discord.js');
module.exports = {
    name: "invite",
    description: "This Command Gives You A Link To Add The Bot",
    run:async(client,message, args) => {
        const addembed = new Discord.MessageEmbed()
        .setColor('#ffbb00')
        .setTitle('Invite')
        .setDescription('If You Want To Add My Bot There Is The Link *No I Aint Letting PPL Add It Yet*')
        .setFooter('Pls Do It');
            message.channel.send(addembed);
    }
}