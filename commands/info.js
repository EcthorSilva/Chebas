const { MessageEmbed } = require('discord.js');
const { prefix } = require('../settings/config.json'); // Puxa o prefixo que foi definido no arquivo config.json

module.exports = function info(message) {
    let args = message.content.substring(prefix.length).split(' ');
    const comando = args.shift().toLowerCase();

    if (message.author.bot) return; // Evita que o bot fique se respondendo ou respondendo outro bot em loop
    // if (!message.content.startsWith(prefix)) return;

    // Definido variaveis para as datas
    const date = message.guild.createdAt
    const joined = message.member.joinedAt

    if (comando === 'projeto') {
        const InfoEmbed = new MessageEmbed()
            .setURL('https://github.com/EcthorSilva/Chebas')
            .setAuthor('Ecthor Silva', 'https://avatars.githubusercontent.com/u/13456785?v=4', 'https://github.com/EcthorSilva')

            .setDescription(`***Quer saber um pouco mais sobre o Chebas?***

            Chebas é um BOT para Discord desenvolvido em NodeJS utilizando a biblioteca 
            Discord.js e todo o codigo dele esta disponivel no Github. Caso você tenha alguma 
            duvida ou sugestão é só me mandar uma mensagem, se quiser me ajudar é só 
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
                Olá ${message.author.username}, você esta no servidor ${message.guild.name}, ele foi criado por ${message.guild.owner} no dia ${formatDate('DD/MM/YYYY, às HH:mm:ss', date)} e atualmente tem um total de ${message.guild.memberCount} membros. Você está conosco desde o dia ${formatDate('DD/MM/YYYY, às HH:mm:ss', joined)}`)
            .setThumbnail('https://cdn.discordapp.com/attachments/617496661324857367/835655032526602240/latest.png')

            .setTimestamp()
            .setColor('#2C5364')
            .setFooter(`By Chebas`);

        message.channel.send(exampleEmbed);
    }
};

/** Formata a data passada para o padrão do Brasileiro
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 **/
 function formatDate (template, date) {
    var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
    return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
      return template.split(specs[i]).join(item)
    }, template)
  }