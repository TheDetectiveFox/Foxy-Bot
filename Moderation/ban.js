const Discord = require('discord.js');
module.exports = {
    name: "ban",
    usage: ["f!ban @user"],
    aliases:["yeet", "b"],
    example: ["f!yeet @TheDetectiveFox"],
    description: "This Command yeet's Bad Members BUT They Can't Join Back",
    run:async(client, message, args) => {
        const member = message.mentions.users.first(); 
        if(message.member.permissions.has('BAN_MEMBERS') || message.member.permissions.has('ADMINISTRATOR')){
       if(member){
           const memberTarger = message.guild.members.cache.get(member.id);
           memberTarger.ban();
           message.channel.send('User Has Been Banned')
       } else{
           message.channel.send('You Did Not Mention A Member To Ban')
       }}else {
           message.channel.send('You Dont Have Permissions To Ban Members')
       }
    }
}