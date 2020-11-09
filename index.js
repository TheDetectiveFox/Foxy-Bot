const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
client.once('ready', () => {
    console.log('Ready!');
});
client.on('message', message => {
    console.log(message.content);

    if (message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
    } else if (message.content === `${prefix}beep`) {
        message.channel.send('Boop.');
    };
    if (message.content === `${prefix}help`) {
        const helpembed = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle('Bot Commands')
.setDescription('For More About Any Command Type \`f!help (command name)\`')
.addFields(
    { name: 'Commands', value: '\`f!ping\`    \`f!beep\`' })
.addField('Inline field title', 'Some value here', true)
.setFooter('Writen By TheDetectiveFox#1633 Owner Of The Bot');
        message.channel.send(helpembed);
    };

});
client.login(token);