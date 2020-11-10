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
    { name: 'Commands', value: '\`f!ping\`,\`f!beep\`,\`f!about\`,\`f!github\`,\`f!botupdates\`,\`f!support\` ' })
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
{ name: 'Last News', value: '\`Update 11/10/2020: Added Github Command, Added About Command, Added Support Command,Added Bot Activity,Updated The Ping Command And It Now Will Give You Your MS\`' })
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
})});
client.login(token);
