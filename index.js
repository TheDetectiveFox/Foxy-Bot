const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const fs = require('fs');
client.commands = new Discord.Collection();
const Commandsfiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of Commandsfiles){
    const command = require(`./Commands/${file}`);
    client.commands.set(command.name, command);
fs.readdir(__dirname + "/commands/Help", (err, files) => {
      if (err) return console.error(err);
      files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/Help/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log("Loading Command: "+commandName)
      });
  }); 
fs.readdir(__dirname + "/commands/Info", (err, files) => {
      if (err) return console.error(err);
      files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/Info/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log("Loading Command: "+commandName)
      });
  }); 
fs.readdir(__dirname + "/commands/Moderation", (err, files) => {
      if (err) return console.error(err);
      files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/Moderation/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log("Loading Command: "+commandName)
      });
  }); 
  fs.readdir(__dirname + "/commands/Utilities", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/Utilities/${file}`);
      let commandName = file.split(".")[0];
      client.commands.set(commandName, props);
      console.log("Loading Command: "+commandName)
    });
}); 
fs.readdir(__dirname + "/commands/Games", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/Games/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Command: "+commandName)
  });
}); 
fs.readdir(__dirname + "/commands/Economy", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/Economy/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Command: "+commandName)
  });
}); 
client.once('ready', () => {
    console.log('Bot Online Kiddo');
});
// bot activity
client.on('ready', () => {
 console.log(`${client.user.tag} is ready`);
 setInterval(() => {
  bot.user.setActivity(`f!help | in ${client.guilds.cache.size} servers.`, {type: 'WATCHING'});
}, 60000);

})
client.on('message', message => {
    if (message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ */)
    const commandName = args.shift().toLowerCase();
const command = client.commands.get(commandName);
if(!command) return;
command.execute(message, args);
})};
client.login(token);