// inicio
const Discord = require('discord.js');
const client = new Discord.Client();

const { readdirSync } = require('fs');

const DataBase = require('./commands/db');
const help = require('./commands/help');
const info = require('./commands/info');
const music = require('./commands/music');
const config = require('./settings/config.json');

// DataBase
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json')
const db = low(adapter)

// Estrutura Principal
client.login(config.token);

// Carrega os arquivos na pasta events
const evtFiles = readdirSync('./events/')
console.log(`Carregando o total de ${evtFiles.length} eventos`)
evtFiles.forEach(f => {
  const eventName = f.split('.')[0]
  const event = require(`./events/${f}`)

  client.on(eventName, event.bind(null, client))
})

// Comandos
client.on('message', (message) => {
    help(message);
    DataBase(message);
    info(message);
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