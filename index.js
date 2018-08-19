
const Commando = require('discord.js-commando');
const bot = new Commando.Client();



const INVITE = process.env.INVITE;
const TOKEN = process.env.TOKEN;

bot.on('ready',function(){
   console.log("ready");
});

bot.on('message', function(message){
    if(message.content == INVITE)
    {
        message.delete(0); //Supposed to delete message
        message.member.send("Valid code, you have been given the invited role.");
        let invited = message.member.guild.roles.find("name", "invited");
        message.member.addRole(invited);
    }
});





bot.login(TOKEN);