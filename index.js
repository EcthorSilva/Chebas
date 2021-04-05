// inicio
const Discord = require('discord.js');
const db = require('./commands/db');
const client = new Discord.Client();
const help = require('./commands/help');
const config = require("./settings/config.json");

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

// music

const ytdl = require("ytdl-core");

var servers = {};

client.on('message', message => {
    let args = message.content.substring(config.prefix.length).split(" ");

    switch (args[0]) {
        case 'play':

            function play(connection, message) {
                var server = servers[message.guild.id];

                server.dispatcher = connection.play(ytdl(server.queue[0], { filter: 'audioonly' }));
                server.queue.shift();
                server.dispatcher.on('end', function () {
                    if (server.queue[0]) {
                        play(connection, message);
                    }
                    else {
                        connection.disconnect();
                    }
                });
            }

            if (!args[1]) {
                message.channel.send('Você esqueceu do link, meu parceirinho.');
                return;
            }

            if (!message.member.voice.channel) {
                message.channel.send('Você precisa estar em um canal de voz para usar este comando!');
                return;
            }           

            if (!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            }
            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if (!message.member.voiceConnection) message.member.voice.channel.join().then(function (connection) {
                play(connection, message);
            })

        break;
        
        case 'skip':
            var server = servers[message.id];

            if(server.dispatcher) server.dispatcher.end();
            message.channel.send('Trocando de musica...')
        break;
        
        case 'stop':
            var server = servers[message.guild.id];
            if(message.guild.voiceConnection){
                for(var i = server.queue.length -1; 1 >= 0; i--){
                    server.queue.splice(i, 1);
                }
                server.dispatcher.end();
                message.channel.send('Avisando que estou saindo do canal de voz')
                console.log('queue foi interrompido')
            }
            if(message.guild.connection) message.guild.voiceConnection.disconnect();
        break;
    }
})
