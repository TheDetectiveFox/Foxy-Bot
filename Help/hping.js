
module.exports = {
    name: "help ping",
    description: "Teachs You What Is Ping Used For",
    execute(message, args){
        if(args.join('ping') === command.name) {
            const phelpembed = new Discord.MessageEmbed()
        .setColor('#1229ff')
        .setTitle('Ping Command Help')
        .setDescription('This Commands Gives You Your MS')
            message.channel.send(phelpembed);
        }
    }
}