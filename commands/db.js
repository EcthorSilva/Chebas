// bug fix 
const { prefix } = require('../settings/config.json');

// DataBase
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json')
const db = low(adapter)

module.exports = function help(message) {
    let args = message.content.substring(prefix.length).split(' ');
    const comando = args.shift().toLowerCase();

    if (message.author.bot) return; // Evita que o bot fique se respondendo ou respondendo outro bot em loop
    if (message.channel.type === 'dm') return; // Evita que o bot responda o comando na DM
    if (!message.content.startsWith(prefix)) return;

    //criar
    if (comando === 'criar') {
        db.get(message.guild.id)
            .push({
                id: message.author.id,
                nick: message.author.username,
                avatar: message.author.displayAvatarURL,
            }).write()
        message.channel.send('Perfil criado com sucesso!')
    }

    //editar
    if (comando === 'editar') {
        if (!args[0]) return message.channel.send('Você esqueceu do argumento ')
        let [novonome] = args
        db.get(message.guild.id)
            .find({ id: message.author.id }).assign({ nick: novonome }).write()
        message.channel.send('Perfil editado com sucesso!')
    }

    //apagar
    if (comando === 'apagar') {
        db.get(message.guild.id).remove({ id: message.author.id }).write()
        message.channel.send('Perfil excluido com sucesso!')
    }

};