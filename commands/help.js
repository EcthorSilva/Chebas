const { MessageEmbed } = require('discord.js');

module.exports = function help(msg) {
  if (msg.content === '!ajuda' || msg.content === '!help' || msg.content === '!comandos') {
    const embed = new MessageEmbed()
      .setTitle('Lisa de comandos...')
      .setDescription(`
        **!ajuda**, ** !help ** ou **!comandos** - Mostra todos os comandos presentes no bot;        
      `)
      .setFooter('yamete kudasai~')
      .setColor('#2C5364');
    msg.channel.send(embed);
  }
};