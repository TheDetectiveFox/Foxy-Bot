const Discord = require('discord.js');
const {readdirSync} = require('fs')

module.exports = {
    name: "help",
    description: "This Command Shows All The Commands",
    run:async(client,message, args) => { 
        if(!args[0]) {
            let categories = [];
            readdirSync('./Commands/').forEach(dir => {
                let commands = readdirSync(`./Commands/${dir}`).filter(f=>f.endsWith(".js"));
                let cmds = commands.map((command) => {
                    let file =  require(`../../Commands/${dir}/${command}`)
                    if(!file.name) return "No command name";
                    let name = file.name.replace(".js", "")
                    return `\`${name}\``
                })
                let data = new Object()
                data = {
                    name: dir.toUpperCase(),
                    value: cmds.length === 0 ? "*Coming Soon*" : cmds.join(", ")

                }
                categories.push(data)
            })
            let helpbed = new Discord.MessageEmbed()
            .setTitle(`Help - Commands`)
            .setColor('RANDOM')
            .addFields(categories)
            .setDescription(`For More Information About Any Command Type \`f!help <command name>\``)
            .setFooter(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic : true })}`)
            .setTimestamp()
            return message.channel.send(helpbed)
        } else {
            let command = client.commands.get(args[0].toLowerCase()) || client.commands.find((c) => c.aliases.includes(args[0].toLowerCase))
            if(!command) return message.channel.send(`Command Not Found.`)
            let name = command.name;
            let description = command.description ? command.description : "No Description Provided";
            let usage = command.usage ? command.usage : "No Usage Provided";
            let example = command.example ? command.example : "No Example Provided";
            let aliases =  command.aliases ? `\` ${command.aliases.join(",")}\`` : "There Are No Aliases For This Command";
            let Bedrock = new Discord.MessageEmbed()
                .setTitle(`Help - ${args[0]}`)
                .setColor('RANDOM')
                .addFields(
                    {name: "Description", value: description},
                    {name: "Usage", value: usage},
                    {name: "Examples", value: example },
                    {name: "Aliases", value: aliases}
                )
                .setFooter(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic : true })}`)
                .setTimestamp()
            return message.channel.send(Bedrock)
                
        }
    }
}