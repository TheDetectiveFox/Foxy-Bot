module.exports = {
    name: "invite",
    description: "This Command Gives You A Link To Add The Bot",
    execute(message, args){
        const addembed = new Discord.MessageEmbed()
        .setColor('#1229ff')
        .setTitle('Invite')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=774901331482902528&permissions=8&scope=bot')
        .setDescription('If You Want To Add My Bot There Is The Link')
        .setFooter('Pls Do It');
            message.channel.send(addembed);
    }
}