const { MessageEmbed } = require('discord.js');
const { prefix } = require('../settings/config.json'); // Puxa o prefixo que foi definido no arquivo config.json

module.exports = function help(message) {
    let args = message.content.substring(prefix.length).split(' ');
    const comando = args.shift().toLowerCase();

    if (message.author.bot) return; // Evita que o bot fique se respondendo ou respondendo outro bot em loop
    if (!message.content.startsWith(prefix)) return;

    if (comando === 'help' || comando === 'ajuda') {
        const HelpEmbed = new MessageEmbed()
            .setTitle('Lisa de comandos...')

            .setDescription(`
            **!help** ou **!ajuda** - Mostra todos os comandos presentes no bot.

            ***MUSICAS***

            **!play** - Faz o bot pesquisar e tocar uma musica no YouTube (Também é possivel usando com um link);
            **!skip** - Pula para a proxima musica da fila;
            **!stop** - Faz o bot parar de tocar musica e sair do canal de voz.

            *!info* - Mostra algumas informações sobre o servidor em que o bot esta presete  
            `)

            .setTimestamp()
            .setFooter('by Spacewlkr#1605')
            .setColor('#2C5364');
        message.channel.send(HelpEmbed);
    }
};