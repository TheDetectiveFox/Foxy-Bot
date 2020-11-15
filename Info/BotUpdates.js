module.exports = {
    name: "botupdates",
    description: "This Command Will Give You Least Updates For The Bot",
    execute(message, args){
        const upembed = new Discord.MessageEmbed()
        .setColor('#1229ff')
        .setTitle('Bot Updates')
        .addFields(
        { name: 'Last News', value: '\`Made Bot Work 24/7 ALWAYS ONLINE\`,\`Added Invite Command\`' })
        .setFooter('Last Updated 11/11/2020');
            message.channel.send(upembed);
    }
}