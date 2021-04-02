const { MessageEmbed } = require('discord.js');

module.exports = function help(msg) {
  if (msg.content === '!ajuda' || msg.content === '!help' || msg.content === '!comandos') {
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
    msg.channel.send(embed);
  }
};