const Discord = require('discord.js');
module.exports = {
    name: "help",
    description: "This Command Shows All The Commands",
    run:async(client,message, args) => {
        const helpembed = new Discord.MessageEmbed()
        .setColor('#ffbb00')
        .setTitle('Bot Commands')
        .setDescription('For More About Any Command Type \`f!help (command name)\` BTW It Is Not Done Yet')
        .addFields(
            { name: 'Moderation', value: '*Coming Soon*' },
            { name: 'Info', value: '\`f!about\`, \`f!github\`,\`f!botupdates\`,\`f!support\`,\`f!invite\`' },
            { name: 'Econnomy', value:'*Coming Soon*'},
            { name: 'Games', value: '*Coming Soon*'},
            { name: 'Extras', value: '\`f!ping\`'})
        .setFooter('Writen By TheDetectiveFox#2009 Owner Of The Bot');
                message.channel.send(helpembed);
    }
}