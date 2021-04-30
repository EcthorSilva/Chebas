const { MessageEmbed } = require('discord.js');
const { prefix } = require('../settings/config.json'); // Puxa o prefixo que foi definido no arquivo config.json

module.exports = function info(message) {
    let args = message.content.substring(prefix.length).split(' ');
    const comando = args.shift().toLowerCase();

    if (message.author.bot) return; // Evita que o bot fique se respondendo ou respondendo outro bot em loop
    if (!message.content.startsWith(prefix)) return;


    if (comando === 'projeto') {
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
    else if (comando === 'info') {

        const exampleEmbed = new MessageEmbed()

            .setDescription(`
                Olá, ${message.author.username} você esta no servidor ${message.guild.name}, ele foi criado por ${message.guild.owner} e atualmente tem um total de ${message.guild.memberCount} membros.`)
            .setThumbnail('https://cdn.discordapp.com/attachments/617496661324857367/835655032526602240/latest.png')

            .setTimestamp()
            .setColor('#2C5364')
            .setFooter(`By Chebas`);

        message.channel.send(exampleEmbed);
    }
};