const { MessageEmbed } = require('discord.js');
const { prefix } = require('../settings/config.json'); // Puxa o prefixo que foi definido no arquivo config.json

module.exports = function help(message) {
    let args = message.content.substring(prefix.length).split(' ');
    const comando = args.shift().toLowerCase();

    if (message.author.bot) return; // Evita que o bot fique se respondendo ou respondendo outro bot em loop
    if (!message.content.startsWith(prefix)) return;

    if (comando === 'help' || comando === 'ajuda') {
        const embed = new MessageEmbed()
            .setTitle('Lisa de comandos...')
            .setDescription(`
            **!ajuda** ou **!help** - Mostra todos os comandos presentes no bot.

            ***MUSICAS***

            **!play** - Faz o bot pesquisar e tocar uma musica no YouTube (Também é possivel usando com um link);
            **!skip** - Pula para a proxima musica da fila;
            **!stop** - Faz o bot parar de tocar musica e sair do canal de voz.
            `)
            .setFooter('yamete kudasai~')
            .setColor('#2C5364');
        message.channel.send(embed);
    }

    if (comando === 'info'){
        const InfoEmbed = new MessageEmbed()
            .setURL('https://github.com/EcthorSilva/Chebas')
            .setAuthor('Ecthor Silva', 'https://avatars.githubusercontent.com/u/13456785?v=4', 'https://github.com/EcthorSilva')
    
            .setDescription(`***Quer saber um pouco mais sobre o Chebas?***

            Chebas é um BOT para Discord desenvolvido em NodeJS utilizando a biblioteca 
            Discord.js, todo o codigo dele esta disponivel no Github caso você tenha alguma 
            duvida ou sugestão é só me mandar uma mensagem, caso queira me ajudar é só 
            ir até o meu repositório
            
            Github: https://github.com/EcthorSilva/Chebas`)

            .setTimestamp()
            .setFooter('by Spacewlkr#1605')
            .setColor('#2C5364');

            message.channel.send(InfoEmbed);
    }
};