const ytdl = require("ytdl-core");
const prefix = '!';

module.exports = function music(message) {
    let args = message.content.substring(prefix.length).split(" ");

    var servers = {};
    
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
                message.channel.send('Você esqueceu do link!.');
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
        
        /*case 'skip':
            var server = servers[message.guild.id];

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
        */
    }
};