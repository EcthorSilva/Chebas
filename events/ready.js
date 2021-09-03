// Evento ready é disparado assim que o bot é conectado ao Discord

 module.exports = async (client) => {
    console.log('Oh shit, here we go again...'); // Eu entendi a referencia
    console.log(`Estou iniciando com ${client.users.cache.size} usuários em ${client.guilds.cache.size} servidores.`); // Mostra em quantos servers o bot esta e com quantos users online
    client.user.setActivity(`Estou em ${client.guilds.cache.size} servidores`); // Mostra em quantos servers o bot esta.
}