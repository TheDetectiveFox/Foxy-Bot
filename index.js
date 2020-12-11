const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const fs = require('fs');
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync('./Commands/')
// bot activity
client.on('ready', () => {
  console.log(`${client.user.tag} is ready`);
  client.user.setActivity(`f!help | in ${client.guilds.cache.size} servers`, {type:"WATCHING"})
});


let ascii = require("ascii-table")
let table = new ascii("Commands")
table.setHeading("Command", "Load Status");
fs.readdirSync("./Commands/").forEach(dir => {
   let commands = fs.readdirSync(`./Commands/${dir}/`).filter(file => file.endsWith(".js"));
   for(let file of commands){
     let pull = require(`./Commands/${dir}/${file}`);
     if(pull.name) {
       table.addRow(file, "FINE")
       client.commands.set(pull.name, pull)
     }
     else{
       table.addRow(file, "Not Fine - Missing name or it is not a string");
       continue;
     }
     if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
   }

})
console.log(table.toString())
client.on('message', async message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(!message.guild) return;
  let args = message.content.slice(prefix.length).trim().split(' ')
  let cmd = args.shift().toLowerCase()
  let command = client.commands.get(cmd)
  if(!command) command = client.commands.get(client.aliases.get(cmd));
  if(command) command.run(client, message, args) 
})

client.login(token);
