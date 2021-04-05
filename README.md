# Chebas

_Chebas é um BOT para o Discord desenvolvido em NodeJS utilizando a biblioteca Discord.js_

Criei este BOT com o intuito de desenvolver os meus conhecimentos em JavaScript e NodeJS

### Updates

- Correções na estrutura do código
- Removido bibliotecas desnecessárias
- Adicionado a biblioteca LowDB para iniciar um banco de dados simples
- Ao iniciar o bot é mostrado em quantos servers ele esta e com quantos usuarios online
- Adicionado as funções para dar inicio ao banco de dados em LowDB
- Fiz algumas alterações na estrutura do help.js e correções no index.js
- Todos os comandos da parte de musicas foram movidos para a pasta *commands*
- Adicionado as bibliotecas ytdl-core e ffmpeg
- Corrigido o bug do bot mudo após entrar no canal usando `npm install ffmpeg-static`

### Comandos

Aqui ficará a lista de todos os comandos presentes no BOT (É possivel ver também no discord usando os comandos **!ajuda**, **!help** ou **!comandos**).  

>*!criar* - Cria um perfil com os dados do usuario que digitou o comando.  
>*!editar* - Edita o nickname do usuario que digitou o comando dentro do banco de dados. (Lembrando que precisa usar o comando e um parametro. Ex: *!editar NewNickname*)  
>*!apagar* - Apaga o perfil do usuario que digitou o comando.  

>*!play* - Dá play na musica escolhida. (Lembrando que precisa usar o comando e um parametro. (Ex: *!play link*)  
>*!skip* -  
>*!stop* -  

### BUGs

- Os comandos *`!skip`* e *`!stop`* não estão funcionando corretamente 

### Bibliotecas

[Discord.js](https://www.npmjs.com/package/discord.js)  
[Lowdb](https://www.npmjs.com/package/lowdb)  
[ffmpeg](https://www.npmjs.com/package/ffmpeg)  
[ytdl-core](https://www.npmjs.com/package/ytdl-core)  

### Links Úteis

[Discord Permissions Calculator](https://discordapi.com/permissions.html)  
[Discord Developer Portal](https://discord.com/developers/applications)  