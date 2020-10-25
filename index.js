const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
const fs = require("fs");
const http = require('http');
const memory = require("memory");
const mb = memory();
const config = require("./config.json")
client.commands = new Discord.Collection();

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.repl.co`);
}, 280000);
app.listen(process.env.PORT);
fs.readdir("./comandos/", (err, files) =>{
  if(err) console.error(err);
  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/${f}`);
    console.log(`✅ Comandos ${f} carregados`)

    client.commands.set(props.help.name, props); 
		client.on("ready", () => {
		
		  const status = [
{
      type: 'STREAMING',
      message: 'LM-BOTS, AQUI TEMOS BOT PARA O SEU SERVIDOR!',
      url: 'https://www.twitch.tv/leolord1'
    },
    {
      type: 'PLAYING',
     message: `👨‍💻 ESSE BOT FOI FEITO PELO LMS5413 (Não é publico)`,
      url: 'https://google.com/'
		},
		
    //{
     //type: 'STREAMING',
      //message: `No Servidor do discord temos ${client.guilds.cache.memberCount}`,
      //url: 'https://google.com/'
    //}
  ]
 
  function cs() {
    const random = status[Math.floor(Math.random() * status.length)];
    client.user.setActivity(random.message, { type: random.type, url: random.url });
    //console.log(random)
	}
  setInterval(cs, 1000)
});
  });

 console.log("Bot ligado!");
 console.log(`Minha memoria está em ${mb}`)
client.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(!message.content.startsWith(config.prefix)) return;

const args = message.content.slice(config.prefix.length).trim().split(/ +/g);




});


client.on("message", async message => {
let prefix = config.prefix;
let messageArray = message.content.split(" ");
// let command = messageArray[0];
let command = messageArray[0];

let args = messageArray.slice(1);

let arquivocmd = client.commands.get(command.slice(prefix.length))
if(arquivocmd) arquivocmd.run(client,message,args);
let b = /(https:)?(www.)?(discord.gg|discord.me|discordapp.com|invite.gg|discord.com|invite.gg)([a-z0-9-.]+)?/i;
if (b.exec(message.content)) {
		if (message.member.hasPermission('ADMINISTRATOR')) return;
      message.delete() // ele ira deletar a mensagem
      message.reply("Não divulgue servidores aqui!")
	}
const member = message.mentions.users.first() || message.author;
	 	if(message.author.bot) return;
         if(message.channel.id != '768501208645500988') return;
					message.react("769614914766635038")
})
client.on("guildMemberAdd", member => {
    let canal = client.channels.cache.get("768458023202848768")
    member.roles.add("768456973028163614")
    const embed = new Discord.MessageEmbed()
    .setColor("#00FF00")
    .setTitle("LM-BOTS")
    .addField(`Bem vindo ${member.user.tag}`, "Aqui vendemos bots para o seu servidor")
    canal.send(`${member}`)
    canal.send(embed)
        let meuservidor = client.guilds.cache.get('768456871782514690');
        let contador = meuservidor.memberCount;
        let canalCounter = meuservidor.channels.cache.get('768467588782882846');
        canalCounter.setName('Membros: '+ contador);
})
client.on("guildMemberRemove", member => {
    let canal = client.channels.cache.get("768458221533921300")

    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("LM-BOTS")
    .addField(`A que pena que você saiu ${member.user.tag}`, "Esperamos que algum dia você volte!")
    canal.send(embed)

		    let meuservidor = client.guilds.cache.get('768456871782514690');
        let contador = meuservidor.memberCount;
        let canalCounter = meuservidor.channels.cache.get('768467588782882846');
        canalCounter.setName('Membros: '+ contador);
})
});
client.login(config.token);