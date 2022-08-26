# Chebas

_Chebas é um BOT para o Discord desenvolvido em NodeJS utilizando a biblioteca Discord.js_  

Iniciei este projeto com o intuito de aprimorar meus conhecimentos em JavaScript e conhecer mais sobre NodeJS.

[![Discord.js Badge](https://img.shields.io/badge/Discord.js-12.5.1-7489d2)](https://www.npmjs.com/package/discord.js)
[![LowDB Badge](https://img.shields.io/badge/Lowdb-1.0.0-blue)](https://www.npmjs.com/package/lowdb)
[![FFmpeg Badge](https://img.shields.io/badge/FFmpeg--static-4.3.0-green)](https://www.npmjs.com/package/ffmpeg-static)
[![ytdl-core Badge](https://img.shields.io/badge/Ytdl--Core-4.11.1-red)](https://www.npmjs.com/package/ytdl-core)
[![OpusScript Badge](https://img.shields.io/badge/OpusScript-0.0.8-lightgrey)](https://www.npmjs.com/package/opusscript)
[![Yt-Search](https://img.shields.io/badge/2.8.0-Yt--Search-%23FF1C12)](https://www.npmjs.com/package/yt-search)

## Instalação  

Primeiro você tera que clonar o repositório e se certificar que o [NodeJs](https://nodejs.org/en/) esteja instalado, assim que concluir esta etapa execute o seguinte comando no diretório raiz:  

```sh

npm install

```  

Se estiver tudo certo, crie um arquivo com o nome de config.json seguindo o exemplo do config.json.exemplo presente na pasta settings. Após concluir tudo você poderá iniciar seu bot utilizando o seguinte comando:

```sh

node .

```  
### Comandos

Aqui ficará a lista de todos os comandos presentes no BOT (É possivel ver também no discord usando os comandos **!help** ou **!ajuda**).  

>*!criar* - Cria um perfil com os dados do usuario que digitou o comando.  
>*!editar* - Edita o nickname do usuario que digitou o comando dentro do banco de dados. (Lembrando que precisa usar o comando e um parametro. Ex: *!editar NewNickname*)  
>*!apagar* - Apaga o perfil do usuario que digitou o comando.  

>*!play* - Dá play na musica escolhida. (Lembrando que precisa usar o comando e um parametro. (Ex: *!play link* ou *!play nome da musica*)  
>*!skip* - Avança para a proxima musica, caso você tenha colocado outra musica na fila.  
>*!stop* - Para a musica que esta em reprodução  

>*!info* - Mostra algumas informações sobre o servidor em que o bot esta presete  
>*!projeto* - Mostra algumas informações sobre o projeto do Chebas  
### Updates

- Correções na estrutura do código  
- Agora é possivel solicitar a musica apenas com o nome dela  
- Corrigido o problema ao pular ou parar a musica  
- Agora a fila de musicas esta funcionando    
- Todos os comandos da parte de musicas foram atualizados na pasta *commands*  
- Adicionado uma nova biblioteca para fazer pesquisas de musicas no YouTube  
- Algumas correções pequenas  
- Adicionado um *Embed* com algumas informações
- Removi o evento Ready do index para adiciona-lo a sua pasta propria onde futuramente haverá mais eventos  
- Foi criado uma nova Branch para que eu possa trabalhar em algumas ideias usando o lowdb sem comprometer a Branch Master
- Update na biblioteca ytdl-core para 4.11.1

### Links Úteis

[Discord Permissions Calculator](https://discordapi.com/permissions.html)  
[Discord Developer Portal](https://discord.com/developers/applications)  
