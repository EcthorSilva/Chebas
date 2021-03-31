const Discord = require('discord.js');

const bot = new Discord.Client();
const help = require('./commands/help');
const token = ' ';

bot.login(token)

bot.on('ready', () => {
    console.log('Oh shit, here we go again...')
})

bot.on('message', msg => {
    if (msg.content === 'eae chebas')
        msg.reply('Salve')
});

bot.on('message', (msg) => {

    help(msg);
    
});
  