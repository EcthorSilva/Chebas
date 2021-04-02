// inicio
const Discord = require('discord.js');
const client = new Discord.Client();
const help = require('./commands/help');
const config = require("./settings/config.json");

// DataBase
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

// Estrutura Principal

client.login(config.token);

client.on("ready", () => {
    console.log('Oh shit, here we go again...');
    console.log(`Estou iniciando com ${client.users.cache.size} usuários em ${client.guilds.cache.size} servidores.`); // Mostra em quantos servers o bot esta e com quantos users online
    client.user.setActivity(` Estou em ${client.guilds.cache.size} servidores`); // Mostra em quantos servers o bot esta.
});

client.on('message', (msg) => {
    help(msg);
});

client.on("guildCreat", () => {
    db.set(guild.id, []).write()
})

// Saudações
/*client.on('message', msg => {
    if (msg.content === 'Eae Chebas' || msg.content === 'eae chebas' || msg.content === 'Chebas' || msg.content === 'chebas')
        msg.reply('Salve')
});*/


// Banco de dados
client.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    //criar
    if (comando === "criar") {
        db.get(message.guild.id)
            .push({
                id: message.author.id,
                nick: message.author.username,
                avatar: message.author.displayAvatarURL,
            }).write()
        message.channel.send('Perfil criado com sucesso!')
    }

    //editar
    if (comando === "editar") {
        if (!args[0]) return message.channel.send('Você esqeceu do argumento ')
        let [novonome] = args
        db.get(message.guild.id)
            .find({ id: message.author.id }).assign({ nick: novonome }).write()
        message.channel.send('Perfil editado com sucesso!')
    }

    //apagar
    if (comando === "apagar") {
        db.get(message.guild.id).remove({ id: message.author.id }).write()
        message.channel.send('Perfil excluido com sucesso!')
    }

});