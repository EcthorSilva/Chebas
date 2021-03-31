const Discord = require('discord.js');

const bot = new Discord.Client();
const help = require('./commands/help');
const config = require("./settings/config.json");

bot.login(config.token);

bot.on('ready', () => {
    console.log('Oh shit, here we go again...')
});

bot.on('message', msg => {
    if (msg.content === 'Eae Chebas' || msg.content === 'eae chebas' || msg.content === 'Chebas' || msg.content === 'chebas')
        msg.reply('Salve')
});

bot.on('message', (msg) => {

    help(msg);
    
});