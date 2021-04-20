const { MessageEmbed } = require('discord.js');
const prefix = '!';

module.exports = function help(message) {
    let args = message.content.substring(prefix.length).split(' ');
    const comando = args.shift().toLowerCase();

    if (message.author.bot) return; // Evita que o bot fique se respondendo ou respondendo outro bot em loop
    if (!message.content.startsWith(prefix)) return;

    if (comando === 'help' || comando === 'ajuda' || comando === 'comandos') {
        const embed = new MessageEmbed()
            .setTitle('Lisa de comandos...')
            .setDescription(`
            **!ajuda**, ** !help ** ou **!comandos** - Mostra todos os comandos presentes no bot.

            ***MUSICAS***

            **!play** - Faz o bot pesquisar e tocar uma musica no YouTube (Também é possivel usando com um link);
            **!skip** - Pula para a proxima musica da fila;
            **!stop** - Faz o bot parar de tocar musica e sair do canal de voz.
            `)
            .setFooter('yamete kudasai~')
            .setColor('#2C5364');
        message.channel.send(embed);
    }
};