const Discord = require('discord.js');
module.exports = {
    name: "kick",
    usage: ["f!kick @user"],
    aliases:["k"],
    example:["f!kick @TheDetectiveFox"],
    description: "This Command kick's Bad Members BUT They Can Join Back",
    run:async(client, message, args) => {
         const member = message.mentions.users.first(); 
         if(message.member.permissions.has('KICK_MEMBERS') || message.member.permissions.has('ADMINISTRATOR')){
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send('User Has Been Kicked')
        } else{
            message.channel.send('You Did Not Mention A Member To Kick')
        }}else {
            message.channel.send('You Dont Have Permissions To Kick Members')
        }
    }
}