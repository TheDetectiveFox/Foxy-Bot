module.exports = {
    name: "help",
    description: "This Command Shows All The Commands",
    execute(message, args){
        const helpembed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Bot Commands')
        .setDescription('For More About Any Command Type \`f!help (command name)\` BTW It Is Not Done Yet')
        .addFields(
            { name: 'Commands', value: '\`f!ping\`,\`f!about\`,\`f!github\`,\`f!botupdates\`,\`f!support\`,\`f!invite\` ' })
        .setFooter('Writen By TheDetectiveFox#1633 Owner Of The Bot');
                message.channel.send(helpembed);
    }
}