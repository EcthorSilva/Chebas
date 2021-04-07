# Chebas

_Chebas é um BOT para o Discord desenvolvido em NodeJS utilizando a biblioteca Discord.js_  

Iniciei este projeto com o intuito de aprimorar meus conhecimentos em JavaScript e conhecer mais sobre NodeJS.

[![Discord.js Badge](https://img.shields.io/badge/Discord.js-12.5.1-7489d2)](https://www.npmjs.com/package/discord.js)
[![LowDB Badge](https://img.shields.io/badge/Lowdb-1.0.0-blue)](https://www.npmjs.com/package/lowdb)
[![FFmpeg Badge](https://img.shields.io/badge/FFmpeg--static-4.3.0-green)](https://www.npmjs.com/package/ffmpeg-static)
[![ytdl-core Badge](https://img.shields.io/badge/Ytdl--Core-4.5.0-red)](https://www.npmjs.com/package/ytdl-core)
[![OpusScript Badge](https://img.shields.io/badge/OpusScript-0.0.8-lightgrey)](https://www.npmjs.com/package/opusscript)
### Comandos

Aqui ficará a lista de todos os comandos presentes no BOT (É possivel ver também no discord usando os comandos **!ajuda**, **!help** ou **!comandos**).  

>*!criar* - Cria um perfil com os dados do usuario que digitou o comando.  
>*!editar* - Edita o nickname do usuario que digitou o comando dentro do banco de dados. (Lembrando que precisa usar o comando e um parametro. Ex: *!editar NewNickname*)  
>*!apagar* - Apaga o perfil do usuario que digitou o comando.  

>*!play* - Dá play na musica escolhida. (Lembrando que precisa usar o comando e um parametro. (Ex: *!play link*)  
### Updates

- Correções na estrutura do código
- Removido bibliotecas desnecessárias
- Adicionado a biblioteca LowDB para iniciar um banco de dados simples
- Ao iniciar o bot é mostrado em quantos servers ele esta e com quantos usuarios online
- Adicionado as funções para dar inicio ao banco de dados em LowDB
- Fiz algumas alterações na estrutura do help.js e correções no index.js
- Adicionado as bibliotecas ytdl-core e ffmpeg
- Todos os comandos da parte de musicas foram movidos para a pasta *commands*
- Corrigido o bug do bot mudo após entrar no canal usando `npm install ffmpeg-static`  
### Links Úteis

[Discord Permissions Calculator](https://discordapi.com/permissions.html)  
[Discord Developer Portal](https://discord.com/developers/applications)  