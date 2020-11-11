const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
client.once('ready', () => {
    console.log('Ready!');
});
// bot activity
client.on('ready', () => {
    console.log(`${client.user.tag} is ready`);
    client.user.setActivity('f!help FOR FREE', {type:"WATCHING"})
client.on('message', message => {
    console.log(message.content);
// ping command
if (message.content === `${prefix}ping`) {
    message.channel.send('pinging...').then(pingMessage => {
            
        const start = message.createdTimestamp;
        const end = pingMessage.createdTimestamp;
        const subtraction = end - start;
        
        pingMessage.edit(` ${subtraction} ms.`)
        })}
// help command
    if (message.content === `${prefix}help`) {
        const helpembed = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle('Bot Commands')
.setDescription('For More About Any Command Type \`f!help (command name)\` BTW It Is Not Done Yet')
.addFields(
    { name: 'Commands', value: '\`f!ping\`,\`f!about\`,\`f!github\`,\`f!botupdates\`,\`f!support\`,\`f!invite\` ' })
.setFooter('Writen By TheDetectiveFox#1633 Owner Of The Bot');
        message.channel.send(helpembed);
    };
// The About Command
if (message.content === `${prefix}about`) {
    const aboutembed = new Discord.MessageEmbed()
.setColor('#0432ff')
.setTitle('About The Bot')
.setDescription('This Bot Was Made By TheDetectiveFox#1633 This Bot Is Planned To Be A Leveling Economy Moderation Fun Bot ')
.setFooter('Wirtten By Owner Of Bot');
    message.channel.send(aboutembed);
};
// bot updates embed
if (message.content === `${prefix}botupdates`) {
    const upembed = new Discord.MessageEmbed()
.setColor('#1229ff')
.setTitle('Bot Updates')
.addFields(
{ name: 'Last News', value: '\`Made Bot Work 24/7 ALWAYS ONLINE\`,\`Added Invite Command\`' })
.setFooter('Last Updated 11/10/2020 10:42');
    message.channel.send(upembed);
};
// github embed
if (message.content === `${prefix}github`) {
    const gitembed = new Discord.MessageEmbed()
.setColor('#1229ff')
.setTitle('Github ')
.setURL('https://github.com/TheDetecitveFox/Foxy-Bot/blob/main/index.js')
.setDescription('This Is The Main Git Hub You Will See All The Code There')
    message.channel.send(gitembed);
};
// support embed
if (message.content === `${prefix}support`) {
    const supembed = new Discord.MessageEmbed()
.setColor('#1229ff')
.setTitle('Discord Support Server')
.setURL('')
.setDescription('Discord Support Server Coming Soon You Can Meet Owner And Report Bugs Or Suggest Stuff In That Discord But For Now It Is Not Done')
.setFooter('Join When You Need Help');
    message.channel.send(supembed);
};
// invite embed
if (message.content === `${prefix}invite`) {
    const addembed = new Discord.MessageEmbed()
.setColor('#1229ff')
.setTitle('Invite')
.setURL('https://discord.com/api/oauth2/authorize?client_id=774901331482902528&permissions=387136&scope=bot')
.setDescription('If You Want To Add My Bot There Is The Link')
.setFooter('Pls Do It');
    message.channel.send(addembed);
};
})});
client.login(token);
