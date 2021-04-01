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

// Saudações

client.on('message', msg => {
    if (msg.content === 'Eae Chebas' || msg.content === 'eae chebas' || msg.content === 'Chebas' || msg.content === 'chebas')
        msg.reply('Salve')
});