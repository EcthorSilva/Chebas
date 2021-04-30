// inicio
const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

const db = require('./commands/db');
const help = require('./commands/help');
//const music = require('./commands/music');
const config = require('./settings/config.json');

// Estrutura Principal
client.login(config.token);

client.on("ready", () => {
    console.log('Oh shit, here we go again...'); // Eu entendi a referencia
    console.log(`Estou iniciando com ${client.users.cache.size} usuários em ${client.guilds.cache.size} servidores.`); // Mostra em quantos servers o bot esta e com quantos users online
    client.user.setActivity(`Estou em ${client.guilds.cache.size} servidores`); // Mostra em quantos servers o bot esta.
});

client.on('message', (message) => {
    help(message);
    db(message);
    //music(message);
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

// Musica 2.0

const queue = new Map();

client.on('message', async message => {

    if (message.author.bot) return; // Evita que o bot fique se respondendo ou respondendo outro bot em loop

    const voice_channel = message.member.voice.channel; // Verifica se o user esta dentro do canal de voz.

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    const server_queue = queue.get(message.guild.id);

    // Se o user usou o comando play ele irá seguir por aqui.
    if (comando === 'play') {

        if (!voice_channel) return message.channel.send('Você precisa estar em um canal de voz para usar este comando!'); // Verifica se o user esta dentro do canal de voz.
        if (!args.length) return message.channel.send('Você esqueceu de colocar o link ou o nome da musica');
        let song = {};

        // Se o argumento for um link.
        if (ytdl.validateURL(args[0])) {
            const song_info = await ytdl.getInfo(args[0]);
            song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url }
        } else {
            // Se o argumento não for um link.
            const video_finder = async (query) => {
                const video_result = await ytSearch(query);
                return (video_result.videos.length > 1) ? video_result.videos[0] : null;
            }

            const video = await video_finder(args.join(' '));
            if (video) {
                song = { title: video.title, url: video.url }
            } else {
                message.channel.send('Não foi possivel encontrar o video.');
            }
        }

        // Se não houver musicas na fila.
        if (!server_queue) {

            const queue_constructor = {
                voice_channel: voice_channel,
                text_channel: message.channel,
                connection: null,
                songs: []
            }

            // Adiciona os valores na fila global. 
            queue.set(message.guild.id, queue_constructor);
            queue_constructor.songs.push(song);

            // Estabelece uma conexão e reproduz a função vide_player.
            try {
                const connection = await voice_channel.join();
                queue_constructor.connection = connection;
                video_player(message.guild, queue_constructor.songs[0]);
            } catch (err) {
                queue.delete(message.guild.id);
                message.channel.send('Algo ocorreu com a conexão!');
                throw err;
            }
        } else {
            server_queue.songs.push(song);
            return message.channel.send(`A musica **${song.title}** foi adicionada na fila!`);
        }
    }

    else if (comando === 'skip') skip_song(message, server_queue);
    else if (comando === 'stop') stop_song(message, server_queue);

});

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);

    // Se não houver nenhuma musica na fila ele sai do canal de voz e exclui os valores da fila global
    if (!song) {
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 0.5 })
    .on('finish', () => {
        song_queue.songs.shift();
        video_player(guild, song_queue.songs[0]);
    });
    await song_queue.text_channel.send(`Agora esta tocando **${song.title}**`)
}

const skip_song = (message, server_queue) => {
    if(!server_queue){
        return message.channel.send(`Não tem nenhuma musica na fila.`);
    }
    server_queue.connection.dispatcher.end();
}

const stop_song = (message, server_queue) => {
    server_queue.songs = [];
    server_queue.connection.dispatcher.end();
}