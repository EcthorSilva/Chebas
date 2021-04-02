const { MessageEmbed } = require('discord.js');
const prefix = '!';

module.exports = function help(message) {
  let args = message.content.substring(prefix.length).split(' ');
    const comando = args.shift().toLowerCase();

    if (message.author.bot) return; // Evita que o bot fique se respondendo ou respondendo outro bot em loop
    if (!message.content.startsWith(prefix)) return;

    if (comando === 'help' || comando === 'ajuda' || comando === 'comandos'){
        const embed = new MessageEmbed()
        .setTitle('Lisa de comandos...')
        .setDescription(`
            **!ajuda**, ** !help ** ou **!comandos** - Mostra todos os comandos presentes no bot.
        
            ***BANCO DE DADOS***

            **!criar** - Cria um perfil com os dados do usuario que digitou o comando;
            **!editar** - Edita o nickname do usuario que digitou o comando (Lembrando que precisa usar o comando e um parametro. Ex: *!editar NewNickname*);
            **!apagar** - Apaga o perfil do usuario que digitou o comando.
            `)
        .setFooter('yamete kudasai~')
        .setColor('#2C5364');
        message.channel.send(embed);
    }
};