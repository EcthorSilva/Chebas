// inicio
const Discord = require('discord.js');
const client = new Discord.Client();
//const ytdl = require("ytdl-core");
const db = require('./commands/db');
const help = require('./commands/help');
const config = require('./settings/config.json');
const music = require('./commands/music')

// Estrutura Principal
client.login(config.token);

client.on("ready", () => {
    console.log('Oh shit, here we go again...');
    console.log(`Estou iniciando com ${client.users.cache.size} usuários em ${client.guilds.cache.size} servidores.`); // Mostra em quantos servers o bot esta e com quantos users online
    client.user.setActivity(`Estou em ${client.guilds.cache.size} servidores`); // Mostra em quantos servers o bot esta.
});

client.on('message', (message) => {
    help(message);
    db(message);
    music(message);
});

// DataBase
client.on("guildCreat", () => {
    db.set(guild.id, []).write()
})

// Saudações
client.on('message', async message => {

    if (message.author.bot) return; // Evita que o bot fique se respondendo ou respondendo outro bot em loop
    //if (message.channel.type === 'dm') return; // Evita que o bot responda o comando na DM
    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    if (comando === 'Chebas' || comando === 'chebas') {
        message.channel.send('Eae, se tiver alguma duvida é só escrever !help')
    }
});